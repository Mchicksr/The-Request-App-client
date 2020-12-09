import React from 'react';
import './Main.css'
import {  Link  } from 'react-router-dom'


function Main(){

    return(
        <div>
    <h1 className="neon">WELCOME</h1>
      <h2>How would you like to party</h2>
      <Link to="Form" className ="req"> Send Request </Link> 
      <Link to="Vote" className ="req">Vote Best Choices</Link>
      <Link to="Review" className="req"> Send Review</Link>
    </div>
    )
}

export default Main;