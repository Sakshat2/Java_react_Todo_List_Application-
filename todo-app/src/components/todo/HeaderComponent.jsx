
import { Link } from 'react-router-dom'
import { useAuth } from './security/Authcontext'



 export default function HeaderComponent() {

    // const authContext =useContext(AuthContext)
    //now use this 

    const authContext =useAuth()
    const isAutenticated=authContext.isAuthenticated
    function logout(){
        authContext.lagout()
    }
   
    // console.log(authContext.number)
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="kka">The office</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {isAutenticated && <Link className="nav-link" to="/Welcome/sakshat">Home</Link>}
                                
                            </li>
                            <li className="nav-item fs-5">
                                {isAutenticated && <Link className="nav-link" to="/todos">TODOA</Link>}
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            {!isAutenticated && <Link className="nav-link" to="/login">login</Link>}
                        </li>
                        <li className="nav-item fs-5">
                           {isAutenticated && <Link className="nav-link" to="/logout" onClick={logout} >Logout</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>


    )
 }