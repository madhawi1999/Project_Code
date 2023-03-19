import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./navbar.css"


export default function NavBar() {
  return (
    
      <div className="navBarBox">

        <div className="navBarLeft"></div>
        <span className="logo">Gold Aquarium</span>
        
        <div className="navBarCenter"></div>
        
        <div className="searchBarBox">
            <SearchIcon className='searchIcon'/>
            <input placeholder='Search items here....' className="searchInput" />
        </div>

        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">Home</span>
                <span className="navBarLink">About</span>
                <span className="navBarLink">Cart</span>
                <span className="navBarLink">ContactUs</span>
            </div>
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <AddShoppingCartIcon className='cartIcon'/>
                    <span className="Icontag">0</span>
                </div>
            </div>
            
        </div>
      </div>
    
  )
}
