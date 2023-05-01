import axios from "axios"

const api = axios.create({
    baseURL: 'https://644baf394bdbc0cc3a97afd1.mockapi.io/api/v1'
})

export const getUsers = async () => {
    try{
        const data = await api.get(`/users`);
        return data
    }catch(e){
        console.log(e)
    }
    
}

export const getUserById = async (id) => {
    return await api.get(`/users/${id}`).then(res => res.data)
}

export const createUser = async (payload) => {
    const newUser = {...payload}
    try{
        await api.post(`/users`, newUser).then(res => res.data)
            
    }catch(e){
        console.log(e)
    }
    
}

export const updateUser = async (id, payload) => {
    return await api.put(`/users/${id}`, payload).then(res => res.data)
}

export const deleteUser = async (id) => {
    try{
        await api.delete(`/users/${id}`).then(res => res.data)
    }catch(e){
        console.log(e)
    }
    
}

export const deleteSelectedUsers = async (ids) => {
    try{
        ids.map(async(id) => {
            await api.delete(`/users/${id}`).then(res => res.data)
        })
 
    }catch(e){
        console.log(e)
    }
    
}