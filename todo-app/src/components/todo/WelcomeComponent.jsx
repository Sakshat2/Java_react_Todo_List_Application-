import{ useParams, Link } from 'react-router-dom'
// import axios from 'axios'
import { useState } from 'react'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/Authcontext'






function WelcomeComponent() {
    const { username } = useParams()
  
    const  [messages, setmessage]=useState(null)
    const authContext=useAuth()


    function callHelloWorldRestApi(){
       
       
        console.log('called')
        // const where='http://localhost:8080/hello-world'
      
        // axios.get(where,
        // {
        //   headers:{ 'Origin':'http://localhost:3000'}
        // })
        // .then(  (response) => successResponse(response))
        // .catch( (errorw)=>errorResponse(errorw))
        // .finally( ()=>console.log('cleanupw'))
         // axios.get(where,
        //     {
        //       headers:{ 'Origin':'http://localhost:3000'}
        //     })
        //     .then(  (response) => successResponse(response))
        //     .catch( (errorw)=>errorResponse(errorw))
        //     .finally( ()=>console.log('cleanupw'))

        // retrieveHelloWorldBean()
        //  .then(  (response) => successResponse(response))
        //  .catch( (errorw)=>errorResponse(errorw))
        //  .finally( ()=>console.log('cleanupw'))


//whats the name of the person who has logged in ?for righ now hardcode the sakshat 
         retrieveHelloWorldPathVariable('sakshat',authContext.token)
         .then(  (response) => successResponse(response))
         .catch( (errorw)=>errorResponse(errorw))
         .finally( ()=>console.log('cleanupw'))
       



    }
    function successResponse(response){
        console.log(response)
        setmessage(response.data.message)
        

    }
    function errorResponse(errorw){
        console.log(errorw)

    }
    
    return (
        <div className="Welcome">
            <h1>Welcomme {username}</h1>
            <div >your todos. <Link to="/todos">Go Here</Link></div>


            <div> <button className='btn btn-success m-5'  onClick={callHelloWorldRestApi}> hello world</button> </div>
            <div className='trd'>{messages}</div>



        </div>
    )
}

export default WelcomeComponent