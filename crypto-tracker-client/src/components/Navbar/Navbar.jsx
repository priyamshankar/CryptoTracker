import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import "./style/Navbar.css";
import bell from "../../Global/GlobalImages/bell.png";
import Notification from '../notiifcation/Notification';

const Navbar = () => {
const [notiToggle , setnotiToggle ] = useState(false);
  const [notificaiton,setNotification] = useState([]);

  const fetchNotifications = async () =>{
    await axios.post("http://localhost:5000/api/notification",{id:Cookies.get("id")}).then((res)=>{
      setNotification(res.data);
      // console.log(res.data);
    });
  }

  useEffect(() => {
    fetchNotifications(); 

    const interval = setInterval(() => {
      fetchNotifications(); 
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function toggleHandle(){
    setnotiToggle(!notiToggle);
  }

  return (
    <div className='navbar-container'>
      <div className="logopart">
      <div className="cmpName">CryptoNodes</div>
      <img src="https://blockspot-io.b-cdn.net/wp-content/uploads/luganodes-company-logo.webp" alt="logo" />
      </div>
      <div className="btnContents">
        <button>
          Home
        </button>
        <button>
          Favourites
        </button>
        <button>
          Login
        </button>
      </div>
        <div className="lastEmb">
          {notiToggle && <div className="closeban"onClick={toggleHandle}></div>}
          <div className="bell" >
          <img src={bell} alt="" onClick={toggleHandle}/>
          <p>{notificaiton.length}</p>
         {notiToggle && <Notification notificaiton={notificaiton} setNotification={setNotification}/>}
          </div>
          <button>Contact us</button>
        </div>

    </div>
  )
}

export default Navbar