import User from "../models/Users";
import { createUser } from "../services/api";

export const capitalizeFirstLetter  = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const createNewUser = ({name,username,email,role,avatar}) => {
    const newUser = new User(name,username,email,role,avatar)
    createUser(newUser)

}