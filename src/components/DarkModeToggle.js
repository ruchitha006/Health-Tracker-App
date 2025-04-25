import React from "react";
import './DarkModeToggle.css';

function DarkModeToggle(){
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };
    return(
        <button className="dark-btn" onClick={toggleDarkMode}>
        Toggle Dark Mode
        </button>
    );
}

export default DarkModeToggle;