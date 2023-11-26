import axios from 'axios'
import { apiClient } from './apiClient'

export const retrieveAllTodosForUsernameApi
 
    =(username)=>   apiClient.get(`/users/${username}/todos`)
 


 export const deleteTodoApi
 = (username, id)=> apiClient.delete(`/users/${username}/todos/${id}`)
 



 export const updateTodoApi
 = (username, id,todo)=> apiClient.put(`/users/${username}/todos/${id}`,todo)

 

 export const retrieveTodoApi

  = (username, id)=> apiClient.get(`/users/${username}/todos/${id}`)
 

 export const createTodoApi
 = (username,todo)=> apiClient.post(`/users/${username}/todos`,todo)

  
    //   const head=  headers:{ 'Origin':'http://localhost:3000'}
 