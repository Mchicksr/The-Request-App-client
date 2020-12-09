import React from 'react';
import Counter from './counter'
import './Vote.css'


class Vote extends React.Component {
    
    // constructor(props){
    //     super(props) 
    //     // debugger
    //     // console.log('init1')
    //     this.state ={
    //         // FavSong:this.props.songs
    //         FavSong:[ 
    //             {className: 'name', votes: 0},
                
            
    //     ]
    //     }
        
    // }
    
    // vote(i,songV){
        
    //     let VoteSong = [...this.state.FavSong]
    //     console.log('TEST0',i,songV)
    //     VoteSong[i].votes++
    //     // // function swap(array,i,j){
    //     // // let temp = array[i]
    //     // // array[i] = array[j]
    //     // // array[j] = temp
    //     // // }
    //     this.setState({FavSong: VoteSong});
    // }
   

    

    // async handleVote(e){
    //     e.preventDefault()
        
    //     // const {nameId}= this.state;
    //     // const findVote = {nameId}
    //     // const get={
    //     //     method:"GET",
    //     //     body:JSON.stringify(nameId),
    //     //     headers:{
    //     //         'content-Type': 'application/json'
    //     //     }
           

    //     // }
    //     // const {params} = this.props.match;
    //     fetch(`https://mighty-temple-37477.herokuapp.com/api/songs/`)
    //     .then((res)=>{
    //         if(!res.ok){
    //             return res.json().then(e=> Promise.reject(e))
    //         }
    //         return res.json()
    //     })

    //     // .then((voteId)=>{
    //     //         const vote = 
    //     //         if(voteId === )
    //     //     })
    
    //     .then((res)=>{
    //         this.setState({className:res})
    //         console.log('TEST2',res)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    //     console.log("TEST1!", this.props.songs)
    // }

    render(){
        // console.log('in',document.getElementById())
        // const message = "NO SUBMITIONS YET! BE THE FRIST"
        // const { className } = name

                // console.log('TEST3',this.state.FavSong)
        // const FavSong = this.state.FavSong.map((songV,i)=>
        //     <div key={i} className= "song"  onClick={e =>this.handleVote(e)}>
        //             <div className ="songVote">
        //                 {songV.votes}
        //             </div>
                   
        //         <button 
        //                 onClick={this.vote.bind(this,i,songV)}
        //                 // onChange={this.handleVote}
        //                 >vote
        //                 {i}
        //         </button>
        //     </div>
                            
        //                 )

        const  songs  = this.props.songs.map((songs, name,title,artist,vote) =>
            
                <ul>
                    <li key={name} >Name: {songs.name.toUpperCase()}</li>
                    <li key={title}>Title: {songs.title.toUpperCase()}</li>
                    <li key={artist}>Artist: {songs.artist.toUpperCase()}</li>
                    <Counter />
                    
                </ul>
                        
                        )
                    
               
        // console.log("yo",this.props.vote)
        
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



/* <div className="FavSong">
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
</div> */

// map through props
// implement vote function inside of 
// 
