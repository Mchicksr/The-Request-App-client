import React from 'react';
import './Vote.css'


class Vote extends React.Component {
    render(){
        
        // const message = "NO SUBMITIONS YET! BE THE FRIST"
        const  songs  = this.props.songs.map((songs, name,title,artist) =>
            
                <ul>
                <li key={name}>Name: {songs.name.toUpperCase()}</li>
                <li key={title}>Title: {songs.title.toUpperCase()}</li>
                <li key={artist}>Artist: {songs.artist.toUpperCase()}</li>
                </ul>
                )
        console.log(this.props.songs)
        
    return(
       
        <div>
            <h1 className="neon">VOTE</h1><br></br>
    <h1 className="songs">{songs}</h1>
      

         {/* <h1 className="message"> {message} </h1> */}
            
        </div>
    )
    }
}

export default Vote; 

// 1. make if statement to for data
//     -if there is no data return Message
//         -put message as variable

//add state to vote if false add message if true add songs
//find a way to toggle to true on first vote