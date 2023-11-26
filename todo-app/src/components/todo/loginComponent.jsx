import { useState } from 'react'

import { useNavigate} from 'react-router-dom'
import { useAuth } from './security/Authcontext'

function LoginComponent() {

    const [username, setUsername] = useState('sakshat')
    const [password, setPassword] = useState('')

    // const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();
    const authContext=useAuth()

    function HandleUsernameChange(event) {

        setUsername(event.target.value)
    }
    function HandlePasswordChange(event) {

        setPassword(event.target.value)
    }

    async function HandleSumit() {
        //here making method async and waiting for status from authcontext
        if (await authContext.login(username,password)) {
            
            navigate(`/Welcome/${username}`)
            // authContext.setAuthenticated(true)
            
            // setShowErrorMessage(false)
            // setShowSuccessMessage(true)
        }
        else {
            // authContext.setAuthenticated(false)
            // setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    // function SuccessMessage(){
    //     if(showSuccessMessage){
    //         return <div className='successMessage' >Authenticated Successfully</div>
    //     }
    //     return null
    // }
    // function ErrorMessage(){
    //     if(showErrorMessage){
    //         return <div className='errorMessage' >Authenticated faild .try again with </div>
    //     }
    //     return null
    // }


    return (

        <div className="d-inline-flex p-2">
            {showErrorMessage && <div className='errorMessage' >Authenticated faild .try again with </div>}
            {/* {showSuccessMessage && <div className='successMessage' >Authenticated Successfully</div>} */}

            {/* <ErrorMessage/>
            <SuccessMessage/> */}


            <div className="jsjs">
                <div>
                    <h1>Time to login!!</h1>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={HandleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={HandlePasswordChange} />
                </div>
                <div>
                    <button type="button" onClick={HandleSumit} >Login</button>
                </div>


            </div>

        </div>
    )
}

export default LoginComponent