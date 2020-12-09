import React from 'react';
import './Sent.css'
import {  Link } from 'react-router-dom'


function Sent(){

    return(
    <div>
        <h1 className="neon">THANK YOU!</h1><br></br>
        <h1 className="neon">THE DJ HAS YOUR REQUEST!</h1> 
        <Link to="Vote" className = "req">Post Request</Link>
        <Link to="Vote" className ="req">Vote</Link>
    </div>
    )


}

export default Sent;