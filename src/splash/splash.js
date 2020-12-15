import React from 'react';
// import { Link } from "react-router-dom"
import './splash.css'
import {  Link  } from 'react-router-dom'
function SplashPage(){
return(
    <div>
        <p>Welcome to the request app! We hope you’re enjoying the party.

Have a song request? Want to wish someone a Happy Birthday? Or give a shoutout? No need to come to the DJ booth! You don’t even have to leave the dance floor!

Press Request A Song and fill out the song request form along with the note you want to leave! 

Press Vote Best Choices to see what songs have already been submitted and to vote for the one you want to hear!

Press Send A Review to leave a review for your favorite DJ and let them know how much fun you had!
</p>
<Link to="Main" className="req"> Start</Link>
    </div>
)
}

export default SplashPage;