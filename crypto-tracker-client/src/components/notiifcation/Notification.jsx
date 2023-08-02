import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import "./style/notification.css";

const Notification = ({notificaiton,setNotification}) => {

    async function clearNotification(){
        setNotification([]);
        await axios.post('http://localhost:5000/api/clearNotification',{id:Cookies.get("id")});
    }

  return (
    <div className='notifContainer'>
        <div className="headNoti">

        <h2>
            Notification
        </h2>
        <button onClick={clearNotification}>Clear</button>
        </div>
        {notificaiton.map((notiData,i)=>{
            return (
                <div className="notiContent" key={i}>
                   Alert {notiData.coin} price is {notiData.price}
                </div>
            )
        })}
    </div>
  )
}

export default Notification