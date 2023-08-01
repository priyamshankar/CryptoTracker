import React from 'react';
import "./style/Navbar.css";

const Navbar = () => {
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
          <button>Contact us</button>
        </div>

    </div>
  )
}

export default Navbar