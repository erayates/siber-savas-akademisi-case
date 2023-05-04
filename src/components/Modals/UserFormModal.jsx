import { useEffect, useContext, useReducer } from "react";
import {
  Box,
  Input,
  Select,
  MenuItem,
  FormControl,
  Stack,
  Avatar,
  Modal,
  Alert
} from "@mui/material";

import Text from "@mui/material/Typography";

import { avatarList } from "../../utils/avatars";
import CustomButton from "../CustomButton";
import { capitalizeFirstLetter, validateFormData } from "../../utils/helpers";
import { ModalContext } from "../../context/ModalContext";

import { styles } from "../CustomStyles";

import { createUser, updateUser } from "../../services/api";
import { TableContext } from "../../context/TableContext";
import { AlertContext } from "../../context/AlertContext";

function reducer(state, action) {
  switch (action.type) {
    case "SET_AVATARS":
      return { ...state, avatars: action.payload };
    case "SET_ACTIVE_AVATAR":
      return { ...state, activeAvatar: action.payload };
    case "SET_ROLE":
      return { ...state, role: action.payload };
    case "SET_FORM_DATA":
      return { ...state, formData: action.payload };
    case "RESET":
      return { ...state, formData: {}, activeAvatar: "", role: "Role" };
    case "SET_FORM_ERROR":
      return {...state, formError: action.payload}
    case "RESET":
      return { ...state, formData: {}, activeAvatar: "", role: "Role" };
    default:
      return state;
  }
}

function UserFormModal() {
  const initalState = {
    avatars: [],
    activeAvatar: "",
    role: "Role",
    formData: {},
    formError: false
  };

  const [state, dispatch] = useReducer(reducer, initalState);
  const { refreshDataTable } = useContext(TableContext);
  const { modalState, modalDispatch } = useContext(ModalContext);
  const { showAlertBox } = useContext(AlertContext);

  useEffect(() => {
    dispatch({ type: "SET_AVATARS", payload: avatarList });
  }, []);

  useEffect(() => {
    if (modalState.selectedUser) {
      dispatch({ type: "SET_FORM_DATA", payload: modalState.selectedUser });

      state.avatars.map((avatar) => {
        modalState.selectedUser.avatar === avatar.src &&
          dispatch({ type: "SET_ACTIVE_AVATAR", payload: avatar.id });
      });

      dispatch({
        type: "SET_ROLE",
        payload: capitalizeFirstLetter(modalState.selectedUser.role),
      });
    }
  }, [modalState.selectedUser]);

  const handleClose = () => {
    modalDispatch({ type: "CLOSE_USER_MODAL" });
    modalDispatch({ type: "SET_SELECTED_USER", payload: "" });
    dispatch({type: "SET_FORM_ERROR", payload: false})
    dispatch({ type: "RESET" })
  };

  const handleChangeRole = (event) => {
    dispatch({ type: "SET_ROLE", payload: event.target.value });
    dispatch({
      type: "SET_FORM_DATA",
      payload: { ...state.formData, role: event.target.value.toLowerCase() },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormData(state.formData)) {
      dispatch({type: "SET_FORM_ERROR", payload: true})
      return;
    }

    if (modalState.selectedUser) {
      const response = await updateUser(modalState.selectedUser.id, state.formData);
      response ? showAlertBox('success', `Success! User was updated successfully.`) : showAlertBox('error', `Error! User was not updated.`);
    } else {
      const response = await createUser(state.formData);
      response.data ? showAlertBox('success', `Success! User was created successfully.`) : showAlertBox('error', `Error! User was not created.`);
      
    }

    resetAndRefreshTable();
    handleClose();
  };

  const handleChangeInput = (event) => {
    dispatch({
      type: "SET_FORM_DATA",
      payload: { ...state.formData, [event.target.name]: event.target.value },
    });
  };

  const resetAndRefreshTable = () => {
    modalDispatch({ type: "SET_SELECTED_USER", payload: null });
    dispatch({ type: "RESET" });
    refreshDataTable();
  };

  const handleActiveAvatar = (event, avatar) => {
    dispatch({ type: "SET_ACTIVE_AVATAR", payload: avatar });
    dispatch({
      type: "SET_FORM_DATA",
      payload: {
        ...state.formData,
        avatar: state.avatars.filter((item) => item.id === avatar)[0].src,
      },
    });
  };

  const handleFormError = () => {
    dispatch({type: "SET_FORM_ERROR", payload: false})
  }

  return (
    <>
      <Modal open={modalState.openUserModal} onClose={handleClose}>
        <Box sx={styles.userFormBoxStyle}>
          <Box sx={styles.userFormInnerBoxStyle}>
            <form onSubmit={handleSubmit} method="POST" autoComplete="false">
              {state.formError && <Alert severity="error" sx={{marginBottom: '30px'}} onClose={() => handleFormError()}>Please fill the all fields.</Alert>}
              <FormControl sx={{ width: "100%",}}>
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={state.formData.name}
                  sx={styles.userFormInputStyle}
                  onChange={handleChangeInput}
                ></Input>
              </FormControl>

              <FormControl sx={{ width: "100%" }}>
                <Input
                  name="username"
                  placeholder="Username"
                  value={state.formData.username}
                  sx={styles.userFormInputStyle}
                  onChange={handleChangeInput}
                ></Input>
              </FormControl>

              <FormControl sx={{ width: "100%" }}>
                <Input
                  name="email"
                  placeholder="Email"
                  value={state.formData.email}
                  sx={styles.userFormInputStyle}
                  onChange={handleChangeInput}
                ></Input>
              </FormControl>

              <FormControl sx={{ width: "100%" }}>
                <Select
                  value={state.role}
                  onChange={handleChangeRole}
                  sx={styles.userFormInputStyle}
                >
                  <MenuItem value={"Role"} disabled>
                    Role
                  </MenuItem>
                  <MenuItem value={"Contributor"}>Contributor</MenuItem>
                  <MenuItem value={"Subscriber"}>Subscriber</MenuItem>
                  <MenuItem value={"Author"}>Author</MenuItem>
                  <MenuItem value={"Administrator"}>Administrator</MenuItem>
                </Select>
              </FormControl>

              <Box sx={styles.userFormInputStyle}>
                <Text sx={styles.userFormAvatarTextStyle}>Select Avatar</Text>
                <Stack direction="row" spacing={1.5} sx={{ marginTop: "16px" }}>
                  {state.avatars.map((avatar) => {
                    return (
                      <Box
                        key={avatar.id}
                        onClick={(event) =>
                          handleActiveAvatar(event, avatar.id)
                        }
                      >
                        <Avatar
                          alt={avatar.name}
                          src={avatar.src}
                          name="avatar"
                          sx={[
                            styles.userFormAvatarStyle,
                            avatar.id === state.activeAvatar
                              ? styles.userFormAvatarActiveStyle
                              : null,
                          ]}
                        ></Avatar>
                      </Box>
                    );
                  })}
                </Stack>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {modalState.selectedUser ? (
                  <CustomButton type="submit">Edit User</CustomButton>
                ) : (
                  <CustomButton type="submit">Create User</CustomButton>
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default UserFormModal;
