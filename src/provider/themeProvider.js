import { Height } from "@mui/icons-material";
import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        textColor: {
            main: "#82868C",
        },
        titleColor: {
            main: "#3A3C40",
        },
    },
    typography: {
        fontFamily: "Montserrat",
        fontSize: 13,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 13,
                    lineHeight: 1.5,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: 13,
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                },
            },
        },         
        MuiTableHead: {
            styleOverrides:{
                root: {
                    backgroundColor: "#F5F6F8",
                    fontWeight: 600
                },
            },
        },
        MuiTablePagination:{
            display: "flex",
            alignItems: "center",
        },
        MuiTablePagination:{
            styleOverrides:{
                displayedRows:{
                    display: "none",
                },
                spacer:{
                    display: "none",
                }
            },
        },
        MuiPaginationItem:{
            styleOverrides:{
                icon:{
                    fontSize: 24,
                    color: "#82868C"

                },
                page:{
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    borderRadius: 8,
                    color: "#E3E6EB",
                    '&.Mui-selected':{
                        color: "#fff",
                        backgroundColor: "#2940D3",
                    },
                    '&.Mui-selected:hover':{
                        backgroundColor: "#2940D3",
                    },
                    '&:hover':{
                        color: "#fff",
                        backgroundColor: "#E3E6EB",
                    },
                }

            },
        },

        MuiToolbar:{
            styleOverrides:{
                root:{
                    display: "flex",
                    justifyContent: "center",
                },
            },
            
        }
                    
        
                
    
    },
});

            