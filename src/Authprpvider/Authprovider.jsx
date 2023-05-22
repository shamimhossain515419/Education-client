import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../FirebaseConfig/Firebase.config";
const Authprovider = ({children}) => {
const googleProvider=new GoogleAuthProvider();
const auth=getAuth(app);
const [user,setUser]=useState()
const [loading,setloading]=useState(true)

const login=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password);
}
const GoogleSing=()=>{
      return  signInWithPopup(auth,googleProvider);
}
const Ragister=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
}

useEffect( ()=>{
     const unsubcript=onAuthStateChanged(auth ,user=>{
          setUser(user)
          setloading(false)
     })
     return ()=>{
          return unsubcript();
     }
} ,[])

const Logout=()=>{
     return signOut(auth)
}
console.log(user);
const userinfo={
     login,
     GoogleSing ,
     Ragister ,
     user,
     Logout,
     loading
}

     return (
          <div>
            <AuthContext.Provider value={userinfo}>
               {children}
               </AuthContext.Provider>   
          </div>
     );
};

export default Authprovider;