import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./login.css"
 

export default function Login() {
  return (
    <div className="LoginBox">
        <div className="LoginIcons">
                <div className="LoginIcon">
                    <AccountCircleIcon className='AccountIcon'/>
                </div>
                <div className="navBarIcon">
                    
                </div> 
                <div className="navBarIcon">
                </div>

            </div>
            <div className="pic">
                <img src="/images/1.jpg" alt="" className="profileImg" />
            </div>
      
    </div>
  )
}
