import React, {Component} from 'react';
import'./form.css'

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            title:"",
            artist:"",
            comment:"",
            value: ' '
    
        }
        
    }
    nameChanged(e) {
       
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
            
            if(!res.ok) {
                throw new Error('something went wrong please try again')
            }
            return res.json()
        })
        .then(newSong => {
           

            this.setState({
                name:" ",
                title:" ",
                artist:" ",
                comment:" "
            })
            this.props.handleADD(newSong) 
           
          
        })
        .catch(err => {
            this.setState({
                error: err.message
            })
            
            window.location.href='/vote'

        })
    
    }

    onSubmit(e){
        
        e.preventDefault()
       

    }
    
   
    render(){
       
return (
    <div>
        <p>Request a song and a shoutout all in one place! Fill out the form below with the information about the song you would like to hear, and in the notes section leave your shoutout! Your song will post on the Vote Best Choices page and your notes will be privately sent to the DJ.</p>
    <form
    onSubmit={e => this.handleSubmit(e)}
    >
            <h1 className="neon">REQUEST APP</h1>
            <h2>How would you like to party</h2>

        <label for="name">Name</label><br></br>
        <input 
        required
        type="text" 
        id="name" 
        name="name" 
        value={this.state.name} 
        onChange={e => this.nameChanged(e)} 
        placeholder="Name">
        </input><br></br>

        <label for="title">Song Title</label><br></br>
        <input 
        type="text" 
        className="title" 
        name="title"  
        value={this.state.title} 
        onChange={e => this.titleChanged(e.target.value)} 
        placeholder="Song Title">
        </input><br></br>

        <label for="artist">Artist</label><br></br>
        <input 
        type="text" 
        className="artist" 
        name="artist"  
        value={this.state.artist}
        onChange={e => this.artistChanged(e.target.value)} 
        placeholder="Artist Name"></input><br></br>
        
        <label for="comment">comment</label><br></br>
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
    </div>   
)
    }
}

export default Form;


