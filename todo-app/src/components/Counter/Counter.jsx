import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'
// import { PropTypes } from 'prop-types'


export default function Counter(){
    const [countt ,setcount]= useState(0)

    function incrementCounterParentFunction(by){
        setcount(countt+by)


    }
    function decrementCounterParentFunction(by){
        setcount(countt-by)


    }
    function resetCounter(){
        setcount(0)
    }
   
    
    return(
        <>
        <samp className="totalcount">{countt}</samp>
        <CounterButton by={1} 
         incrementCounterParentFunction={incrementCounterParentFunction}
         decrementCounterParentFunction={decrementCounterParentFunction}/>
         <CounterButton by={2} 
         incrementCounterParentFunction= {incrementCounterParentFunction}
         decrementCounterParentFunction={decrementCounterParentFunction}/>
         <CounterButton by ={5} 
         incrementCounterParentFunction={incrementCounterParentFunction}
         decrementCounterParentFunction={decrementCounterParentFunction}/>
 
         <button className='resetButton' onClick={resetCounter}> reset</button>
        </>
    )
}

