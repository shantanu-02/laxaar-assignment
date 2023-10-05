import React, { useState } from 'react'
import "./navbar.scss"
import user from "../../../public/Images/laxaar-logo.png"
import profile from "../../../public/Images/profile.png"
import { CgFileDocument } from 'react-icons/cg';
import { BsGlobeAmericas } from 'react-icons/bs';
import { GoSignOut } from 'react-icons/go';


const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  // Sample user data
  const userData = {
    name: 'User15432',
    email: 'User15432@gzp.ru',
  };

  // Function to toggle the profile display
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };


  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={user}/>
      </div>
      <div className='profile'>
        <div className='doc'>  
        <CgFileDocument style={{color:"white", height:"24px", width: "24px"}} />
          <p>Documentation</p>
        </div>
        <div className='lang'>
           <div className='region'>
           <BsGlobeAmericas />
           </div>
           <select className='language'>
             <option>English</option>
           </select>
        </div>
        <div className='image' onClick={toggleProfile}>
          <img src={profile} />
          {showProfile && (
          <div className="user-details">
              <div className='details'>
               <div>
                <img src={profile} />
               </div>
               <div>
                <p>{userData.name}</p>
                <p>{userData.email}</p></div>
              </div>
              <hr /> 
              <div onClick={toggleProfile} className='signout'>
                <GoSignOut />
                <div>Sign Out</div>
              </div>
        </div>
      )}
        </div>
      </div>
    </div>
  )
}

export default Navbar