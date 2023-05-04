import { useContext, useEffect, useState } from "react";

import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";

import { TableContext } from "../../context/TableContext";
import { AlertContext } from '../../context/AlertContext';

import { deleteSelectedUsers } from "../../services/api";

import LoadingModal from "../Modals/LoadingModal";

import { styles } from "../CustomStyles";



function Toolbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const { tableState, tableDispatch, refreshDataTable } = useContext(TableContext);
  const { showAlertBox } = useContext(AlertContext);

  useEffect(() => {
    tableDispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
  }, [searchTerm, tableDispatch]);

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDeleteSelectedUsers = async () => {
    if (tableState.selectedUsers.length > 0) {
      setLoading(true);
      const response = await deleteSelectedUsers(tableState.selectedUsers);
      setLoading(false);
      response ? showAlertBox('success', 'Success! Users was deleted successfully!') : showAlertBox('error', 'Error! Something went wrong!');
      tableDispatch({ type: "SET_SELECTED_USERS", payload: [] });
      refreshDataTable();
    }
  };

  return (
    <>
      <Box sx={styles.searchCompBoxStyle}>
        <Box sx={styles.searchCompInnerBoxStyle}>
          <SearchIcon sx={styles.searchCompSearchIconStyle} />
          <FormControl variant="standard">
            <Input
              placeholder="Search"
              onChange={handleChangeSearchTerm}
              sx={{ fontWeight: '600' }}
            />
          </FormControl>
        </Box>
        <Box
          sx={styles.searchCompDeleteBoxStyle}
          onClick={handleDeleteSelectedUsers}
        >
          <DeleteIcon sx={styles.searchCompDeleteIconStyle} />
          <span className="delete">Delete</span>
        </Box>
      </Box>
      {loading && <LoadingModal />}
    </>
  );
}

export default Toolbar;
