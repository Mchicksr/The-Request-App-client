import React, {Component} from 'react';
import Vote from '../Vote/Vote';
import {useHistory} from 'react-router-dom'
import'./form.css'

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            title:null,
            artist:null,
            comment:null,
            value: ' '
    
        }
        
    }
    nameChanged(e) {
        // debugger
        // if(!name){
        //     return "must not be blank"
        // }
        this.setState({
            name: e.target.value
        })
    }

    titleChanged(title) {
        this.setState({
            title
        })
    }

    artistChanged(artist) {
        this.setState({
            artist
        })
    }

    commentChanged(comment) {
        this.setState({
            comment
        })
    }

  
    
    handleSubmit = (event) => {

        event.preventDefault()
         const { name, title, artist, comment } = this.state;
         const newSong = { name, title, artist, comment }
        //  this.setState({})
        //  console.log(newSong)
        const url = 'https://mighty-temple-37477.herokuapp.com/api/songs'
        const options ={
            method: 'POST',
            body: JSON.stringify(newSong),
            headers: {
                'content-Type': 'application/json'
            }
           
        };

        fetch(url,options)
        .then(res => {
            // console.log(res)
            if(!res.ok) {
                throw new Error('something went wrong please try again')
            }
            return res.json()
        })
        .then(newSong => {
            // console.log("het",this.props.history)

            this.setState({
                name:" ",
                title:" ",
                artist:" ",
                comment:" "
            })
            this.props.handleADD(newSong) 
           
            //  this.props.history.push('/vote')
        })
        .catch(err => {
            this.setState({
                error: err.message
            })
            
            window.location.href='/vote'

        })
    
    }

    onSubmit(e){
        // console.log('hey')
        e.preventDefault()
       

    }
    
   
    render(){

return (
    <form
    onSubmit={e => this.handleSubmit(e)}
    >
            <h1 class="neon">REQUEST APP</h1>
            <h2>How would you like to party</h2>

        <label name ="name">Name</label><br></br>
        <input 
        required
        type="text" 
        id="name" 
        name="name" 
        value={this.state.name} 
        onChange={e => this.nameChanged(e)} 
        placeholder="Name">
        </input><br></br>

        <label name ="title">Song Title</label><br></br>
        <input 
        type="text" 
        class="title" 
        name="title"  
        value={this.state.title} 
        onChange={e => this.titleChanged(e.target.value)} 
        placeholder="Song Title">
        </input><br></br>

        <label name ="artist">Artist</label><br></br>
        <input 
        type="text" 
        class="artist" 
        name="artist"  
        value={this.state.artist}
        onChange={e => this.artistChanged(e.target.value)} 
        placeholder="Artist Name"></input><br></br>
        
        <label name ="comment">comment</label><br></br>
        <textarea 
        placeholder="comment"
        name="comment"
        value={this.state.comment}
        onChange={e => this.commentChanged(e.target.value)}
        >
        </textarea>
        <br></br>
        
        <button  
        disabled={!this.state.name && !this.state.title}
        type='submit' 
        className ="req" >
        Send Request 
        </button>
    
    </form>
    
)
    }
}

export default Form;


//Do a validation check for every key stroke
////Do a validation check for submit!