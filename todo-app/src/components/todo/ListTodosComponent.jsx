import { useEffect, useState } from "react"
import {  deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService"
import { useAuth } from "./security/Authcontext"
import { useNavigate, useParams } from "react-router-dom"

function ListTodosComponent() {

     const today = new Date()
     const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])
    
    const {id}=useParams()
 


    //when should  we call this refresh todos?
    //in reach best practise is to call it in useeffect
    useEffect( ()=>refreshTodos(),[])

    //useauth is using from authcontext
    //then to use username we need useAuth() so we are accessing username from useAuth 
    const Authcontext= useAuth()
    const username=Authcontext.username
    const navigate =useNavigate()


    const [message, setmessage]=useState(null)
     function refreshTodos() {
        retrieveAllTodosForUsernameApi(username)
            .then(response =>{
                setTodos(response.data)
                //  console.log(response.data)
                //settodos will print list on screen /webpage
                 
            }).catch(error => console.log(error))

    }

    function deleteTodo(id){
        console.log(id)
        deleteTodoApi(username,id)
        .then(
            //1.display message
            //2.update todos list

            ()=>{
                setmessage(`delete of todos  of specific  ${id}`)
                refreshTodos()
            }
        ).catch(error => console.log(error))
        
    }

    function updateTodo(id){
        // console.log("clicked "+id)
        console.log("ID:",id );
        navigate(`/todo/${id}`)
        
    }
    function addNewTodo(){
        navigate(`/todo/-1`)
        
    }
    return (
        <div className="container">
            <h1>things you want to do</h1>
            { message && <div className="alert alert-warning">{message}</div> }
            <div>id:{id}</div>
            
            <div >
                <table className='table'>
                    <thead>
                        <tr>
                            
                            <th>description</th>
                            <th> is Done</th>
                            <th>TargetDate</th>
                            <th>Delete</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id} >
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.getdate.toDateString()}</td> */}
                                        <td>{todo.targetDate}</td>
                                        <td><button className="btn btn-warning" 
                                           onClick={ ()=> deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-warning" 
                                           onClick={ ()=> updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )

                            )



                        }


                    </tbody>
                </table>
            </div>
            <div> <button className="btn btn-success m-5"onClick={addNewTodo}>Add New Todo</button></div>
        </div>
    )
}
export default ListTodosComponent



// import { useEffect, useState } from "react"
// import {useNavigate} from 'react-router-dom'
// import { retrieveAllTodosForUsernameApi, deleteTodoApi } from "./api/TodoApiService"
// import  useAuth  from "/security/Authcontext"

// function ListTodosComponent() {

//     const today = new Date()

//     const authContext = useAuth()

//     const username = authContext.username

//     const navigate = useNavigate()
    
//     const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

//     const [todos,setTodos] = useState([])

//     const [message,setMessage] = useState(null)
    
//     useEffect ( () => refreshTodos(), [])

//     function refreshTodos() {
        
//         retrieveAllTodosForUsernameApi(username)
//         .then(response => {
//             setTodos(response.data)
//         }
            
//         )
//         .catch(error => console.log(error))
    
//     }

//     function deleteTodo(id) {
//         console.log('clicked ' + id)
//         deleteTodoApi(username, id)
//         .then(

//             () => {
//                 setMessage(`Delete of todos with id = ${id} successful`)
//                 refreshTodos()
//             }
//             //1: Display message
//             //2: Update Todos list
//         )
//         .catch(error => console.log(error))
//     }

//     function updateTodo(id) {
//         console.log('clicked ' + id)
//         navigate(`/todo/${id}`)
//     }

//     function addNewTodo() {
//         navigate(`/todo/-1`)
//     }

//     return (
//         <div className="container">
//             <h1>Things You Want To Do!</h1>
            
//             {message && <div className="alert alert-warning">{message}</div>}

            
//             <div>
//                 <table className="table">
//                     <thead>
//                             <tr>
//                                 <th>Description</th>
//                                 <th>Is Done?</th>
//                                 <th>Target Date</th>
//                                 <th>Delete</th>
//                                 <th>Update</th>
//                             </tr>
//                     </thead>
//                     <tbody>
//                     {
//                         todos.map(
//                             todo => (
//                                 <tr key={todo.id}>
//                                     <td>{todo.description}</td>
//                                     <td>{todo.done.toString()}</td>
//                                     {/* <td>{todo.targetDate.toDateString()}</td> */}
//                                     <td>{todo.targetDate.toString()}</td>
//                                     <td> <button className="btn btn-warning" 
//                                                     onClick={() => deleteTodo(todo.id)}>Delete</button> </td>
//                                     <td> <button className="btn btn-success" 
//                                                     onClick={() => updateTodo(todo.id)}>Update</button> </td>
//                                 </tr>
//                             )
//                         )
//                     }
//                     </tbody>

//                 </table>
//             </div>
//             <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
//         </div>
//     )
// }

// export default ListTodosComponent