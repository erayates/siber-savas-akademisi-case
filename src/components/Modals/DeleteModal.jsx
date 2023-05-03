import { useContext } from "react";

import { Modal, Button, Box } from "@mui/material";
import Text from "@mui/material/Typography";

import { deleteUser } from "../../services/api";

import { TableContext } from "../../context/TableContext";
import { ModalContext } from "../../context/ModalContext";
import { AlertContext } from "../../context/AlertContext";

import { styles } from "../CustomStyles";

function DeleteModal() {
  const { tableState, refreshDataTable, tableDispatch } =
    useContext(TableContext);
  const { modalState, modalDispatch } = useContext(ModalContext);
  const { showSuccessAlert, showErrorAlert } = useContext(AlertContext);

  const handleDelete = async () => {
    if (modalState.selectedUserId) {
      await deleteUser(modalState.selectedUserId);
      refreshDataTable(modalState.selectedUserId);
      validateSelectedUsers();
      handleCloseDeleteModal();
      showSuccessAlert("Success! User was deleted successfully!");
    }
  };

  const validateSelectedUsers = () => {
    const newSelectedUsers = tableState.selectedUsers.filter((user) => {
      user !== modalState.selectedUserId;
    });
    tableDispatch({ type: "SET_SELECTED_USERS", payload: newSelectedUsers });
  };

  const handleCloseDeleteModal = () => {
    modalDispatch({ type: "SET_SELECTED_USER_ID", payload: null });
    modalDispatch({ type: "CLOSE_DELETE_MODAL" });
  };

  return (
    <>
      <Modal open={modalState.openDeleteModal} onClose={handleCloseDeleteModal}>
        <Box sx={styles.deleteModalBoxStyle}>
          <Text sx={styles.deleteModalTextStyle}>
            Are you sure want to delete this user?
          </Text>
          <Box sx={{ marginTop: "30px" }}>
            <Button color="error" variant="contained" onClick={handleDelete}>
              Delete
            </Button>
            <Button
              variant="outlined"
              onClick={handleCloseDeleteModal}
              sx={{ marginLeft: "20px" }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteModal;
