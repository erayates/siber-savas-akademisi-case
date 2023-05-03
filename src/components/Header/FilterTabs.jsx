import { useContext } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import { styled } from "@mui/material/styles";

import { TableContext } from "../../context/TableContext";

export default function FilterTabs() {
  const { tableState, tableDispatch } = useContext(TableContext);
  const handleChange = (event, newValue) => {
    tableDispatch({ type: "SET_FILTER_OPTION", payload: newValue });
  };

  const CustomTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
      backgroundColor: "#2940D3",
      height: "2px",
    },

    "& .MuiTab-root": {
      height: "75px",
      color: "#82868C",
      fontSize: "13px",
      fontWeight: "600",
      fontFamily: "Montserrat",
      lineHeight: "16px",
      textTransform: "none",
      "&:hover": {
        color: "#2940D3",
        opacity: 1,
      },
      "&.Mui-selected": {
        color: "#2940D3",
      },
    },
  });

  return (
    <Box>
      <CustomTabs
        value={tableState.filterOption}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="#2940D3"
      >
        <Tab value="all" label="All Users" />
        <Tab value="contributor" label="Contributor" />
        <Tab value="author" label="Author" />
        <Tab value="administrator" label="Administrator" />
        <Tab value="subscriber" label="Subscriber" />
      </CustomTabs>
    </Box>
  );
}
