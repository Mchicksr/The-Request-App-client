import React from 'react';
import './Vote.css'


class Vote extends React.Component {
    
    constructor(props){
        super(props)
        // debugger
        console.log('init1')
        this.state ={
            // FavSong:this.props.songs
            FavSong:[ {
                nameId: this.props.songs.id, votes: 0
            }]
        }
        
    }

    vote(i){
        
        let VoteSong = [...this.state.FavSong]
        console.log('TEST0',i,this.state.FavSong)
        VoteSong[i].votes++
        // function swap(array,i,j){
        // let temp = array[i]
        // array[i] = array[j]
        // array[j] = temp
        // }
        this.setState({FavSong: VoteSong});
    }
    handleVote(e){
        e.preventDefault()
    console.log('hey')
        
        const {nameId, id}= this.state;
        // const findVote = {nameId}
        const get={
            method:"GET",
            body:JSON.stringify(nameId),
            headers:{
                'content-Type': 'application/json'
            }
        }
        // console.log(`https://mighty-temple-37477.herokuapp.com/api/songs/${id}`)
        fetch(`https://mighty-temple-37477.herokuapp.com/api/songs/${id}`, get)
        .then((res)=>{
            if(!res.ok){
                return res.json().then(e=> Promise.reject(e))
            }
            return res
        })
        .then((res)=>{
            this.setState({nameId:res})
        })
        .catch(error=>{
            console.log(error)
        })
        console.log("Look", this.props.songs)
    }

    render(){
        
        // const message = "NO SUBMITIONS YET! BE THE FRIST"
       

                console.log('TEST3',this.state.FavSong)
        const FavSong = this.state.FavSong.map((songV,i)=>
                <div key={i} className= "song"  onChange={e =>this.handleVote(e)}>
                <div className ="songVote">
                    {songV.votes}
                </div>
                <div className="songName">
                    {songV.name}
                </div>
                    <button 
                    onClick={this.vote.bind(this,i)}
                    // onChange={this.handleVote}
                    >vote
                    </button>
                </div>
                        
                        )

                        const  songs  = this.props.songs.map((songs, name,title,artist,vote) =>
            
                        <ul>
                        <li key={name}>Name: {songs.name.toUpperCase()}</li>
                        <li key={title}>Title: {songs.title.toUpperCase()}</li>
                        <li key={artist}>Artist: {songs.artist.toUpperCase()}</li>
                        <li key={vote}>{FavSong}</li>
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



{/* <div className="FavSong">
{
    this.state.FavSong.map((songV,i)=>
    <div key={i} className= "song">
        <div className ="songVote">
            {songV.votes}
        </div>
        <div className="songName">
            {songV.name}
        </div>
        <button onClick={this.vote.bind(this,i)}>vote</button>
    </div>
    
    )
}
</div> */}

