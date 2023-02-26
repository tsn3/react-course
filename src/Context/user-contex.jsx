import {createContext, useContext} from "react";

const defaultUserData = {
  userName: '',
  age: 0,
  email: '',
  isConfirmed: false,
  confirmUserAccount: () => {},
}
export const UserContext = createContext(defaultUserData)
export const useUserData = () => useContext(UserContext)