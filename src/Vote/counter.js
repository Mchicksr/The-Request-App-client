import React from 'react';

export default class Counter extends React.Component{
    constructor(props){
        super(props) 
        // debugger
        // console.log('init1')
        this.state ={
            // FavSong:this.props.songs
            FavSong:[ 
                {className: 'name', votes: 0},
                
            
        ]
        }
        
    }

    vote(i){
        
        let VoteSong = [...this.state.FavSong]
        VoteSong[i].votes++
        this.setState({FavSong: VoteSong});
    }


    // async handleVote(e){
    //     e.preventDefault()
        
    //     const {votes}= this.state;
    //     const findVote = {votes}
    //     const get={
    //         method:"GET",
    //         body:JSON.stringify(vote),
    //         headers:{
    //             'content-Type': 'application/json'
    //         }
           

    //     }
    //     const {params} = this.props.match;
    //     fetch(`https://mighty-temple-37477.herokuapp.com/api/songs/`)
    //     .then((res)=>{
    //         if(!res.ok){
    //             return res.json().then(e=> Promise.reject(e))
    //         }
    //         return res.json()
    //     })

    
    //     .then((res)=>{
    //         this.setState({vote:res})
    //         console.log('TEST2',res)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    //     console.log("TEST1!", this.props.songs)
    // }

render(){
    return(
        // <h1>hey</h1>
        <div>
             {this.state.FavSong.map((songV,i)=>
                <div key={i} className= "song"  >
                        <div className ="songVote">
                            {songV.votes}
                        </div>
                    
                    <button 
                            onClick={this.vote.bind(this,i,songV)}
                            // onChange={this.handleVote}
                            >vote
                          
                    </button>
                </div>
             )}            
        </div>
    )
}
} 