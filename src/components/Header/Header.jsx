import { useContext } from "react";

import { Box, Divider, Grid } from "@mui/material";
import Text from "@mui/material/Typography";

import FilterTabs from "./FilterTabs";
import CustomButton from "../CustomButton";
import UserFormModal from "../Modals/UserFormModal";

import { ModalContext } from "../../context/ModalContext";

import UsersIcon from "../Icons/UsersIcon";
import PlusIcon from "../Icons/PlusIcon";

import { styles } from "../CustomStyles";

import { useMediaQuery } from '@mui/material';



export default function Header() {
  const isMd = useMediaQuery('(max-width:960px)');
  const { modalDispatch } = useContext(ModalContext);

  const handleOpen = () => {
    modalDispatch({ type: "OPEN_USER_MODAL" });
    modalDispatch({ type: "SET_SELECTED_USER", payload: null });
  };

  return (
    <>{
      !isMd ? (
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
      ) : (
        <>
          <Grid container spacing={2} style={{ marginTop: '10px' }} >
            <Grid item xs={12} sm={12} md={12} style={styles.headerCompBoxStyle}>
              <Grid item xs={6} sm={6} md={6} style={styles.headerCompInnerBoxStyle}>
                <Box sx={styles.headerCompIconBoxStyle}>
                  <UsersIcon />
                </Box>
                <Text sx={styles.headerCompIconTextStyle}>Users</Text>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <CustomButton onClick={handleOpen} style={{ float: 'right' }}>
                  <PlusIcon />
                  Add New User
                </CustomButton>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center' }} >
              <FilterTabs />
            </Grid>


          </Grid>
          <Divider sx={styles.dividerStyle} />
        </>
      )
    }
    </>
  );
}
