import React, {useState} from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
function Counter() {
    //State Creation
    const [counter,setCounter]=useState(0)//Apply 0 as initial state value
    //function Counter
    function incrementCounter(){
        //increment by 1
        setCounter(counter+1)
    }
    function decrementCounter(){
        if(counter!==0){
             //decrement by 1
            setCounter(counter-1)  
        }
       
      
    }
    function resetCounter(){
        setCounter(0)
    }
  return (
    <div className='m-5 p-5 d-flex justify-content-center align-items-center'>
        <div className='container m-5 p-5 border border-2 w-50 w3-panel bg-info'>
            <h1 className='text-dark text-center'>COUNTER APP</h1>
            <h1 className='text-center'>{counter}</h1>
       
        <div className='d-flex justify-content-between'>
        <MDBBtn onClick={incrementCounter} className='bg-danger' >Increment</MDBBtn>
        <MDBBtn onClick={decrementCounter} className='bg-success'>Decrement</MDBBtn>
        <MDBBtn onClick={resetCounter}>Reset</MDBBtn>
        </div>
    </div>



    </div>
  )
}

export default Counter