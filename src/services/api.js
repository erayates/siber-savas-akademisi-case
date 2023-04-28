import axios from axios

const api = axios.create({
    baseURL: 'https://644baf394bdbc0cc3a97afd1.mockapi.io/api/v1/users',
})

export const getUsers = () => {
    return api.get('/users')
}

export const getUserById = (id) => {
    return api.get(`/users/${id}`)
}

export const createUser = (payload) => {
    return api.post(`/users`, payload)
}

export const updateUser = (id, payload) => {
    return api.put(`/users/${id}`, payload)
}

export const deleteUser = (id) => {
    return api.delete(`/users/${id}`)
}