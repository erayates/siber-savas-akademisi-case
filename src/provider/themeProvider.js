
import { createTheme } from "@mui/material";

export const theme = createTheme({
    direction: 'rtl',
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
            
        },

        MuiSvgIcon:{
            styleOverrides:{
                root:{
                    color: '#82868C',
                    width: '30px',
                    height: '30px',
                    marginRight: '10px',
              
                },
            },
        },
        MuiInputBase:{
            styleOverrides:{
                root:{
                    width: '290px',
                    height: '40px',
                    fontFamily: 'Montserrat',
                    fontSize: '13px',
                    lineHeight: '16px',
                    fontWeight: '500',
                    border: '2px solid #E3E6EB',
                    padding: '8px 16px',
                    outline: 'none',
                    borderRadius: '8px',
                    color: '#82868C',
                    '&::before':{
                        borderBottom: 'none !important'
                    },
                    '&::after':{
                        borderBottom: 'none !important'
                    },
                   
                },
                input:{
                    '&::placeholder':{
                        color: '#82868C',
                        opacity: '1'
                    },
                },
                
            },
        },
        MuiSelect: {
            styleOverrides: {
              root: {
                padding: "0",
                height: "40px",
                fontFamily: "Montserrat",
                fontSize: "13px",
                fontWeight: "500",
                border: "none",
                outline: "none",
                borderRadius: "8px",
                
              },
             
              icon: {
                top: "4px",
              },
            },
          },
          MuiMenu:{
            styleOverrides:{
                list:{
                    borderRadius: '8px',
                    padding: '0',
                    color: "#3A3C40",

                },
                paper:{
                    borderRadius: '8px',
                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
                }
            }
          },
          MuiMenuItem:{
                styleOverrides:{
                    root:{
                        fontFamily: "Montserrat",
                        fontSize: '12px',
                        fontWeight: '500',
                        color: '#3A3C40 !important',
                        borderBottom: '1px solid #F5F5F7',
                    },
                    '&:focus':{
                        backgroundColor: '#FFF',
                    }
                }
            },
          


        
        

        
    }

});

            