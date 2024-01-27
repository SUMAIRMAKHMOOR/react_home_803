import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo_img">
          <img src= {Logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              Home 
            </li>
            <li>
              Search
            </li>
            <li>
              Address
            </li>    
            <li className="header_btn">
              +09000991234
            </li>
          </ul>
          <ul />
        </nav>
      </header>
    </div>
  )
}

export default Header