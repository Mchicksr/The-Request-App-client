import React from 'react';

export default class Counter extends React.Component{
    constructor(props){
        super(props) 
        this.state ={
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


render(){
    return(
        
        <div>
             {this.state.FavSong.map((songV,i)=>
                <div key={i} className= "song"  >
                        <div className ="songVote">
                            {songV.votes}
                        </div>
                    
                    <button 
                            onClick={this.vote.bind(this,i,songV)}
                            
                            >vote
                          
                    </button>
                </div>
             )}            
        </div>
    )
}
} 