import React from 'react'
import './Header.css'

function Header() {
  return (
    <nav>
      <h1 id='brand-name'>Zikreddin</h1>
      <ul id="navbar-list">
        <li><a href='https://github.com/zikreddincikla' target='_blank' rel='noopener noreferrer' className='navbar-item'>
            Github
          </a>
        </li>
        <li><a href='https://www.linkedin.com/in/zikreddin-%C3%A7%C4%B1klasa%C4%9F%C4%B1rc%C4%B1o%C4%9Flu-64667a395/' target='_blank' rel='noopener noreferrer' className='navbar-item'>
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header