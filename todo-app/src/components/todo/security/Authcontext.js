//1.creata a contrxt

import { createContext, useContext, useState } from "react";
import { executeBsicAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/apiClient";

//1createContext 
 export const AuthContext =createContext()
 export const useAuth =() =>useContext(AuthContext)
 


//2share the create context with other components

export default function AuthProvider({children}){
   
    // setInterval( ()=> setNumber(number+1),3000)

    // put some state in the context
    //  const [number,setNumber] = useState(2)
     const [isAuthenticated, setAuthenticated]= useState(false)
     

     const [username,setUsername]=useState(null)
     const [token, setToken]=useState(null)


    //  const valueTobeShared=


    // function login (username,password){
    //     if (username === 'sakshat' && password === 'dummy') {
    //        setAuthenticated(true)
    //        setUsername(username)
    //        return true
            
    //         // navigate(`/Welcome/${username}`)
    //     }
    //     else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
            
    //     }
    // }
    async  function login (username,password){
        //windo.btoa is a mehtod to do base 64 encoding
        //here we are doing basic   authemtication token
        //space is very imp 'Basic ' only 1 space is imp
        const baToken = 'Basic '+window.btoa(username + ":"+password)
      
       try{ 
        //here we are waiting for the result of executebasicauth 
        //and result status if 200 then it go futher process thats why we use await
        //and made the method login a sync even in logincomponent in handle submit
        const response= await  executeBsicAuthenticationService(baToken)
        if (response.status==200) {
           setAuthenticated(true)
           setUsername(username)
           setToken(baToken)
           //we are adding config.headers.Authorization=baToken 
           //to all the rest api s
           apiClient.interceptors.request.use(
            (config)=>{
                console.log('intercepting and adding a token ')
                config.headers.Authorization=baToken
                return config
            }
           )
           return true
            
            // navigate(`/Welcome/${username}`)
        }
        else {
            lagout()

            return false
            
        }}catch(error){
            lagout()
            return false

        }
    }


    function lagout(){
       setAuthenticated(false)
       setToken(null)
       setUsername(null)
    }

    return(

        <AuthContext.Provider value={{isAuthenticated, login ,lagout,username ,token}}>
          {children}
        </AuthContext.Provider>
    )

}