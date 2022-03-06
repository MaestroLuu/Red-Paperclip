import React from "react";
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

export default function Header() {
    return (
        // BEM 
        <div className="header">
            <PersonIcon />
            <h2>Header Page</h2>
            <MessageIcon />
        </div>
    );
}