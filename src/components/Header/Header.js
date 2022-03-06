import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { IconButton } from "@material-ui/core";
import RedPaperclip from './redPaperclip.png';
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            <img 
                className="header__redPaperclip" 
                src={RedPaperclip} 
                alt="Red Paperclip"/>
            <IconButton>
                <MessageIcon className="header__icon" fontSize="large"/>
            </IconButton>
        </div>
    );
}