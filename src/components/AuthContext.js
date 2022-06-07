import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { auth } from "./firebase"

export const authContext = createContext()

export const AuthProvider = ({children}) => {

const [user, setUser] = useState()

const singup = (email, password) => {

   return createUserWithEmailAndPassword(auth, email, password)
   
}

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const logout = () => {
    return auth.signOut()
}

useEffect(() => {
    onAuthStateChanged(auth, currerntUser => {
    setUser(currerntUser)
    })
}, [])

  return (
    <authContext.Provider value={{singup, login, logout, user}}> {children} </authContext.Provider>
  )
}

