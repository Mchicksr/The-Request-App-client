import React, {Component} from 'react';
import './Review.css'

class Review extends Component{

    constructor(props) {
        super(props);
        this.state = {
            review:""
        }
    }
    reviewChanged(e) {
        this.setState({
            review: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { review } = this.state;
        const newReview = { review }
        const url = 'https://mighty-temple-37477.herokuapp.com/api/review'
        const opt ={
            method: 'post',
            body: JSON.stringify(newReview),
            headers: {
                'content-Type': 'application/json'
            }
        }

        fetch(url,opt)
        .then(res => {
            if(!res.ok) {
                throw new Error('something went wrong please try again')
            }
            console.log(res)
            return res.json()
        })
        .then(newReview => {
            this.setState({
                newReview:" "
            })
            this.props.handleAdd(newReview)
        })
        .catch(err => {
            this.setState({
                error:err.message
            })
            window.location.href='/review-sent'
        })

    }

    onSubmit(e){
        e.preventDefault()
    }
    render(){
    return(
        <div>
        <h1 className="neon">Review</h1>
    <h2>How was your expreience?</h2>
   
    <form
    
    onSubmit={e => this.handleSubmit(e)} >
         <label for="review">Review</label><br></br>
        <textarea 
        
        value={this.state.review}
        onChange={e => this.reviewChanged(e)}
        placeholder="comment">
        </textarea><br></br>
        <button  
        disabled={!this.state.review }
        type='submit'
        className= "req" >
            Send Review
        </button>
    </form>
    </div>
    )
    }
}

export default Review;