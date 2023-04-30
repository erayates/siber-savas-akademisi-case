import { createContext, useEffect, useState } from 'react';
import { getUsers } from '../services/api';

export const TableContext = createContext();
const TableContextProvider = ({ children }) => {
    const [tableData, setTableData] = useState([]);
    const [filterOption, setFilterOption] = useState('all');

    useEffect(() => {
        const getTableData = async () => {
            const response = await getUsers()
            if(response.data.length > 0){
                setTableData(response.data)
            }
        }
        getTableData()
    },[])

    
    const filterTableData =  (filterOption) => {
            if(filterOption === 'all'){
                return tableData
            }else{
                return tableData.filter(user => user.role === filterOption)
            }
        }



    

    return(
        <TableContext.Provider value={{ tableData, setTableData, filterOption, setFilterOption,filterTableData }}>
            {children}
        </TableContext.Provider>
        
    )
}

export default  TableContextProvider;
