import React from 'react';
import Counter from './counter'
import './Vote.css'


class Vote extends React.Component {
    
   
    render(){
       
        const capitalize = (str) =>{
            if(str)
            return str.charAt(0).toUpperCase() + str.slice(1)
            // return str.toUpperCase()
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
            <h1 className="neon">VOTE</h1><br></br>
            <h1 className="songs">{songs}</h1>
            
            
        </div>
    )
    }
}

export default Vote; 

