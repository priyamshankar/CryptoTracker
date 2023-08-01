import React, { useState } from 'react';
import "./Style/AlertBox.css";

const AlertBox = ({setAlert,coinId}) => {
    const [limits,setLimits]=useState({
        id : coinId,
        min : "",
        max : ""
    });


    function handleChange(e){
        setLimits({...limits,[e.target.name]:e.target.value})
    }

  return (
    <div className='alertBoxContainer'>
        <h2>Create an Alert</h2>
        <div className="inputBoxes">
            <input type="text" placeholder='Enter the minimunm limit'onChange={(handleChange)} name="min"/>
            <input type="text" onChange={(handleChange)} placeholder='Enter the Maximum Limit' name='max'/>
        </div>
        <div className="alertButtons">
            <button onClick={()=>{
                setAlert(false);
            }}>
                cancel
            </button>
            <button>
                Add
            </button>
        </div>
    </div>
  )
}

export default AlertBox