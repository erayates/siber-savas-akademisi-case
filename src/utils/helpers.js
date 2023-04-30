import User from "../models/Users";

export const capitalizeFirstLetter  = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const createNewUser = (fullname,username,email,role) => {
    const newUser = new User(fullname,username,email,role)
    
}