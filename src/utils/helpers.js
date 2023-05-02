import User from "../models/Users";
import { createUser } from "../services/api";



export const capitalizeFirstLetter  = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const createNewUser = ({name,username,email,role,avatar}) => {
    const newUser = new User(name,username,email,role,avatar)
    createUser(newUser)

}


export const isEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email)
}

export const validateFormData = (data) => {
    const {name,username,email,role,avatar} = data;
    console.log(name)
    if(name === undefined || username === undefined || email === undefined || role === undefined || avatar === undefined) {
        return false
    }
    if(!isEmail(email)) {
        return false
    }
    return true;
}

