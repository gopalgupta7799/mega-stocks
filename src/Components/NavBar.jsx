import React, { useState } from 'react'
import '../CSS/NavBar.css'
import logo from '../logo.svg'
import SearchIcon from '../Images/SearchIcon.jpg'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'

export default function NavBar() {
  const [searchText, setSearchText] = useState('');
  const [show, setShow] = useState(false)
  return (
    <nav>
      <Link to="/"><img id="brandImg" src={logo} alt="Groww" /></Link>
      <div id="midNav">
        <div id="searchForm">
          <img src={SearchIcon} id="searchImage" alt="" />
          <input type="text" value={searchText} id='searchText' placeholder="What are you looking for today?"
            onChange={(e) => {
              setSearchText(e.target.value);
              if (searchText) {
                console.log();
              }
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter")
                console.log('function to be implemented to navigate to search page');
            }}
          />
        </div>
      </div>
      <LoginModal show={show} handleClose={() => setShow(false)} />
      <button id="login-register-btn" onClick={() => setShow(true)}>Login/Register</button>
    </nav>
  )
}
