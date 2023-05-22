import React from 'react'
import '../Styles/header.css'

const Header = () => {
  return (
    <header>
        <h2>Where in the world?</h2>
        <div className='colorTheme'>
            <ion-icon name="moon"></ion-icon>
            <span>Dark Mode</span>            
        </div>
        
    </header>
  )
}

export default Header