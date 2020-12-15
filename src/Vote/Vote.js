import React from 'react';
import Counter from './counter'
import './Vote.css'


class Vote extends React.Component {
    
   
    render(){
       
        const capitalize = (str) =>{
            if(str)
            return str.charAt(0).toUpperCase() + str.slice(1)
        } 

        const  songs  = this.props.songs.map((songs, name,title,artist) =>
            
                <ul>
                    <li key={name} >Name: {capitalize(songs.name)}</li>
                    <li key={title}>Title: {capitalize(songs.title)}</li>
                    <li key={artist}>Artist: {capitalize(songs.artist)}</li>
                    <Counter />
                    
                </ul>
                        
                        )
                    
               
       
        
    return(
       

        <div>
             <p>Check out what songs your fellow party-goers have submitted and vote your favorite ones as many times as you want! You can even vote for your own submission! The song with the highest votes may be the one that is played next!</p>
             
            <h1 className="neon">VOTE</h1><br></br>
            <h1 className="songs">{songs}</h1>
            
            
        </div>
    )
    }
}

export default Vote; 

