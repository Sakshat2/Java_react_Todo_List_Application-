import axios from 'axios'

import { apiClient } from './apiClient'

export  function retrieveHelloWorldBean(){

   
    return  apiClient.get('/hello-world-bean')
}

//advance way to use this 

// export const retrieveHelloWorldBean=()=>axios.get('http://localhost:8080/hello-world-bean',
// {
//   headers:{ 'Origin':'http://localhost:3000'}
// })

export const retrieveHelloWorldPathVariable =(username,token)=>apiClient.get(`/hello-world/path-variable/${username}`,{
    headers:{
        Authorization: token
    }
})


//we calling basic auth(from java api) with token which is passed in 
export const executeBsicAuthenticationService
 =(token)=>apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
})