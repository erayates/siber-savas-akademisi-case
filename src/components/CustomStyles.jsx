export const styles = {
    userFormBoxStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0px 7px 20px rgba(40, 41, 61, 0.08)',
        border: '1px solid #E3E6EB',
        backgroundColor: '#fff',
    },

    userFormInnerBoxStyle: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },

    userFormInputStyle: {
        marginBottom: '30px',
        width: '100%'
    },

    userFormAvatarStyle: {
        borderRadius: '4px',
        boxShadow: '0 0 3px 1px rgba(0,0,0,0.1)', 
        cursor:'pointer'
    },
    userFormAvatarActiveStyle: {
        boxShadow: '0 0px 10px 1px rgba(41, 64, 211, 0.8)'
    },
    deleteModalBoxStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        outline: 'none',
        boxShadow: 24,
        borderRadius: '8px',
        p: 4,

    },
    deleteModalTextStyle: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        lineHeight: '15px',
        fontSize: '13px',
        color: '#82868C'
    },

    headerCompBoxStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 18px',
    },
    
    headerCompInnerBoxStyle: {
        display: 'flex',
        alignItems: 'center',
    },
    
    headerCompIconBoxStyle: {
        bgcolor: '#cfe8fc',
        height: '40px',
        width: '40px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    headerCompIconTextStyle: {
        color: '#3A3C40',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'Montserrat',
        lineHeight: '17px',
        marginLeft: '12px',              
    },

    searchCompBoxStyle:{
        display: 'flex',
        margin: '35px 18px',
        justifyContent: 'space-between'
    },

    searchCompInnerBoxStyle:{
        display: 'flex',
        alignItems: 'center',
    },
    searchCompDeleteBoxStyle:{
        display: 'flex',
        alignItems: 'center',
        cursor:'pointer',
        marginRight: '10px'
    },

    searchCompSearchIconStyle: {
        color: '#82868C',
        width: '30px',
        height: '30px',
        marginRight: '16px'
          
    },

    searchCompDeleteIconStyle:{
        color: '#82868C',
        width: '30px',
        height: '30px',
        marginRight: '10px',
       
    },
    dividerStyle:{
        borderWidth: '2px', 
        position:'relative', 
        top: '-2px',
        zIndex:'0'
    },

    loadingModalBoxStyle:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.9)',
    },

    
    tableCellStyle:{
        fontWeight: "600",
        padding: "0" 
    },

    tableCellIconStyle:{
        cursor: "pointer",
        color: "#82868C",
        fontSize: "30px",
    }


    


    

}



