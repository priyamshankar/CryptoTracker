import React, { useState } from 'react';
import "./Style/AlertBox.css";
import cookies from "js-cookie";
import axios from 'axios';

const AlertBox = ({setAlert,coinId}) => {
    const [limits,setLimits]=useState({
        userId:cookies.get("id"),
        coinId : coinId,
        min : "",
        max : ""
    });


    function handleChange(e){
        setLimits({...limits,[e.target.name]:e.target.value})
    }

    function handlesubmit(){
        axios.post("http://localhost:5000/api/alert",limits).then((res)=>{
            // if(res.status===200){
            //     alert("alert added successfully");
            // }
            // else {
            //     alert("some Error occurred");
            // }
            setAlert(false);
            
        })
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
            <button onClick={handlesubmit}>
                Add
            </button>
        </div>
    </div>
  )
}

export default AlertBox