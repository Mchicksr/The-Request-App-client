import React from 'react';
import Counter from './counter'
import './Vote.css'


class Vote extends React.Component {
    
    
    render(){
       

        const  songs  = this.props.songs.map((songs, name,title,artist) =>
            
                <ul>
                    <li key={name} >Name: {songs.name.toUpperCase()}</li>
                    <li key={title}>Title: {songs.title.toUpperCase()}</li>
                    <li key={artist}>Artist: {songs.artist.toUpperCase()}</li>
                    <Counter />
                    
                </ul>
                        
                        )
                    
               
       
        
    return(
       
        <div>
            <h1 className="neon">VOTE</h1><br></br>
            <h1 className="songs">{songs}</h1>
            
            
        </div>
    )
    }
}

export default Vote; 

