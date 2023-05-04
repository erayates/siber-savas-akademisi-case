import { useEffect, useState, useContext } from "react";
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Avatar, TableFooter, TablePagination, Pagination, Stack, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import DeleteModal from "./Modals/DeleteModal";
import UserFormModal from "./Modals/UserFormModal";

import { TableContext } from "../context/TableContext";
import { ModalContext } from "../context/ModalContext";

import { capitalizeFirstLetter } from "../utils/helpers";

import { styles } from "./CustomStyles";

function DataTable() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);

  const { tableState, filterTableData, tableDispatch } = useContext(TableContext);
  const { modalDispatch } = useContext(ModalContext);

  useEffect(() => {
    setUsers(filterTableData());
  }, [tableState.filterOption, tableState.tableData, tableState.searchTerm]);

  useEffect(() => {
    setPage(1);
  }, [tableState.filterOption]);

  const handleAllUsers = (event) => {
    if (event.target.checked) {
      tableDispatch({
        type: "SET_SELECTED_USERS",
        payload: users.map((user) => user.id),
      });
    } else {
      tableDispatch({ type: "SET_SELECTED_USERS", payload: [] });
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleChangePage = (event, newPage) => {
    if (newPage < 0 || newPage >= Math.ceil(users.length / rowsPerPage) + 1) {
      return;
    }
    setPage(newPage);
  };

  const handleChange = (event, id) => {
    if (event.target.checked) {
      if (!tableState.selectedUsers.includes(id)) {
        tableDispatch({
          type: "SET_SELECTED_USERS",
          payload: [...tableState.selectedUsers, id],
        });
      }
    } else {
      tableDispatch({
        type: "SET_SELECTED_USERS",
        payload: tableState.selectedUsers.filter((userId) => userId !== id),
      });
    }
  };

  const handleOpenUserModal = (user) => {
    modalDispatch({ type: "OPEN_USER_MODAL" });
    modalDispatch({ type: "SET_SELECTED_USER", payload: user });
  };

  const handleOpenDeleteModal = (id) => {
    modalDispatch({ type: "OPEN_DELETE_MODAL" });
    modalDispatch({ type: "SET_SELECTED_USER_ID", payload: id });
  };

  const isSelected = (id) => tableState.selectedUsers.includes(id);

  return (
    <>
      <TableContainer sx={styles.tableResponsiveStyle} >
        <Table style={{ minWidth: '1000px' }}>
          <TableHead height={"50px"}>
            <TableRow>
              <TableCell sx={{ padding: "0" }} width={"8%"}>
                <Checkbox
                  checked={tableState.selectedUsers.length === users.length}
                  onChange={handleAllUsers}
                  indeterminate={
                    tableState.selectedUsers.length > 0 &&
                    tableState.selectedUsers.length < users.length
                  }
                  style={styles.headerCompInnerBoxStyle}
                />
              </TableCell>
              <TableCell sx={styles.tableCellStyle} width={"8%"}>Avatar</TableCell>
              <TableCell sx={styles.tableCellStyle} width={"18%"}>Name</TableCell>
              <TableCell sx={styles.tableCellStyle} width={"19%"}>Username</TableCell>
              <TableCell sx={styles.tableCellStyle} width={"25%"}>Email</TableCell>
              <TableCell sx={styles.tableCellStyle} width={"13%"}>Role</TableCell>
              <TableCell sx={styles.tableCellStyle} width={"9%"}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? users.slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage
              )
              : users
            ).map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell sx={{ padding: "0" }} align="center">
                    <Checkbox
                      onChange={(e) => handleChange(e, user.id)}
                      checked={isSelected(user.id)} />
                  </TableCell>
                  <TableCell>
                    <Avatar
                      alt="User Avatar" src={user.avatar}
                      sx={{ borderRadius: "4px" }} />
                  </TableCell>
                  <TableCell style={styles.tableCellStyle}>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{capitalizeFirstLetter(user.role)}</TableCell>
                  <TableCell>
                    <EditIcon
                      sx={styles.tableCellIconStyle}
                      onClick={() => handleOpenUserModal(user)}
                    />
                    <DeleteIcon
                      sx={styles.tableCellIconStyle}
                      onClick={() => handleOpenDeleteModal(user.id)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No users found.
                </TableCell>
              </TableRow>
            )}

            <DeleteModal />
            <UserFormModal />
          </TableBody>
          <TableFooter>
            <TableRow >
              {users.length > 0 && (
                <TablePagination
                  count={Math.ceil(users.length / rowsPerPage)}
                  page={page}
                  rowsPerPageOptions={[-1]}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={({ page, count }) => (
                    <Stack spacing={2}>
                      <Pagination
                        count={count}
                        page={page}
                        onChange={handleChangePage}
                      />
                    </Stack>
                  )}
                />)}
            </TableRow>
          </TableFooter>
        </Table>

      </TableContainer>

    </>
  );
}

export default DataTable;
