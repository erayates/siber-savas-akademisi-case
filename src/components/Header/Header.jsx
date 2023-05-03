import { useContext } from "react";

import { Box, Divider } from "@mui/material";
import Text from "@mui/material/Typography";

import FilterTabs from "./FilterTabs";

import { ModalContext } from "../../context/ModalContext";

import { styles } from "../CustomStyles";
import CustomButton from "../CustomButton";

import UsersIcon from "../Icons/UsersIcon";
import PlusIcon from "../Icons/PlusIcon";

import UserFormModal from "../Modals/UserFormModal";

export default function Header() {
  const { modalDispatch } = useContext(ModalContext);

  const handleOpen = () => {
    modalDispatch({ type: "OPEN_USER_MODAL" });
    modalDispatch({ type: "SET_SELECTED_USER", payload: null });
  };

  return (
    <>
      <Box sx={styles.headerCompBoxStyle}>
        <Box sx={styles.headerCompInnerBoxStyle}>
          <Box sx={styles.headerCompIconBoxStyle}>
            <UsersIcon />
          </Box>
          <Text sx={styles.headerCompIconTextStyle}>Users</Text>
        </Box>
        <FilterTabs />
        <CustomButton onClick={handleOpen}>
          <PlusIcon />
          Add New User
        </CustomButton>
        <UserFormModal />
      </Box>
      <Divider sx={styles.dividerStyle} />
    </>
  );
}
