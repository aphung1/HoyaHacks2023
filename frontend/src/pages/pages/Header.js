import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import './Header.css';

function Header() {
    return ( 
        <div className="header">
            <PersonIcon />
            <h1>SWIPE</h1>
            <ChatIcon />
        </div>
    )
}


export default Header