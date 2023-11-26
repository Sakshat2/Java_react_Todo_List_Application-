

import './TodoApp.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LogoutComponent from './logoutComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ListTodosComponent from './ListTodosComponent'
import LoginComponent from './loginComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import TodoComponent from './TodoComponent'

import AuthProvider , {useAuth}  from 'C:/Users/Asus/OneDrive/Desktop/FullStack-React-Java-App/todo-app/src/components/todo/security/Authcontext.js'

function AuthenticationRoute({children}){
    const authContext=useAuth()
    if(authContext.isAuthenticated)
       return children
    
    return <Navigate to="/" />

}

export default function TodoApp() {
    return (

        <div className='TodoApp'>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={
                        <AuthenticationRoute>
                             <WelcomeComponent />   
                          </AuthenticationRoute>
                         } />
                        <Route path='/todos' element={
                           <AuthenticationRoute>
                           <ListTodosComponent />
                           </AuthenticationRoute>
                          } />

                        <Route path='/todo/:id' element={
                           <AuthenticationRoute>
                           <TodoComponent />
                           </AuthenticationRoute>
                          } />

                        <Route path='/logout' element={
                          <AuthenticationRoute>
                          < LogoutComponent />
                          </AuthenticationRoute>
                         } />

                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>

        </div>

        // <div className="TodoApp" >Todo management Application
        // <LoginComponent/>
        // <WelcomeComponent/> 


    )
}














