
import { createTheme } from "@mui/material";

export const theme = createTheme({

    palette: {
        primary: {
            main: "#2940D3",
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontFamily: 'Montserrat',
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
                    padding: '24px 0'
                },
            },
        },
        
        MuiTableRow:{
            styleOverrides: {
                root: {
                    boxSizing: 'border-box',
                },
            },
        },

        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: "#F5F6F8",
                    fontWeight: 600,
                },
            },
        },
    
        MuiTablePagination: {
            display: "flex",
            alignItems: "center",
            styleOverrides: {
                displayedRows: {
                    display: "none",
                },
                spacer: {
                    display: "none",
                },
                toolbar: {
                    padding: '0'
                }
            },
        },

        MuiPaginationItem: {
            styleOverrides: {
                icon: {
                    fontSize: 24,
                    color: "#82868C"
                },
                page: {
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    borderRadius: 8,
                    color: "#E3E6EB",
                    '&.Mui-selected': {
                        color: "#fff",
                        backgroundColor: "#2940D3",
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: "#2940D3",
                    },
                    '&:hover': {
                        color: "#fff",
                        backgroundColor: "#E3E6EB",
                    },
                },
            },
        },

        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: "flex",
                    justifyContent: "center",

                    '&.MuiToolbar-pagination': {
                        padding: '0'
                    },
                    '&.MuiToolbar-gutters': {
                        padding: '0'
                    }
                },
            },
        },

        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    marginRight: '10px',
                },
            },
        },

        MuiInputBase: {
            styleOverrides: {
                root: {
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
                    '&::before': {
                        borderBottom: 'none !important'
                    },
                    '&::after': {
                        borderBottom: 'none !important'
                    },

                },
                input: {
                    '&::placeholder': {
                        color: '#82868C',
                        opacity: '1'
                    },
                },

            },
        },
        
        MuiSelect: {
            styleOverrides: {
                root: {
                    padding:'0',
                    
                    fontFamily: "Montserrat",
                    fontSize: "13px",
                    fontWeight: "500",
                    border: "none",
                    outline: "none",
                    borderRadius: "8px",
                },

                select: {
                    paddingLeft: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }
            },
        },

        MuiMenu: {
            styleOverrides: {
                list: {
                    borderRadius: '8px',
                    padding: '0',
                    color: "#3A3C40",

                },
                paper: {
                    borderRadius: '8px',
                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
                }
            }
        },
        
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: "Montserrat",
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#3A3C40 !important',
                    borderBottom: '1px solid #F5F5F7',
                },
                '&:focus': {
                    backgroundColor: '#FFF',
                }
            }
        },

        MuiCheckbox: {
            styleOverrides: {
                root: {
                    '&.Mui-checked': {
                        color: '#2940D3',
                    },
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                },
            }
        },
    }
});

