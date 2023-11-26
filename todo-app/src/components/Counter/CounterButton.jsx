// import { useState } from 'react'
export default function CounterButton({by ,incrementCounterParentFunction,decrementCounterParentFunction}) {

    

    // function incrementCounterFunction() {
    // //    setcount(countt+by)
    //    incrementCounterParentFunction(by);
    // }
    // function decrementCounterFunction() {
    //     // setcount(countt-by)
    //     decrementCounterParentFunction(by);
    //  }



    return (
        <div className="Counter">

            {/* <samp className="count">{countt}</samp> */}
            <div>
                <button className="counterButton" 
                onClick={ () =>incrementCounterParentFunction(by)}
                >+{by}</button>

              <button className="counterButton" 
                onClick={ ()=> decrementCounterParentFunction(by)}
                >-{by}</button>

               
            </div>
        </div>
    )
}
// Counter.PropTypes={
//     by:PropTypes.numbers
// };

// Counter.defaultProps ={
//     by:1
// }