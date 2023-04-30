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
    try{
        await api.post(`/users`, payload)
    }catch(e){
        console.log(e)
    }
    
}

export const updateUser = (id, payload) => {
    return api.put(`/users/${id}`, payload)
}

export const deleteUser = (id) => {
    return api.delete(`/users/${id}`)
}