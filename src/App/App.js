import React, {Component} from 'react';
import { Route } from 'react-router-dom'

import './App.css'
import config from '../config'
import Main from '../Main/Main'
import Sent from '../Sent/Sent'
import Form from '../Form/Form '
import Vote from '../Vote/Vote'
import Review from '../Review/Review'
import ReviewSent from '../Review/Review-Sent'
import SplashPage from '../splash/splash'
// import Store from '../Store/Store'

class App extends Component {
  state ={
    songs: []
    
  }
componentDidMount(){
  // console.log(config.API_ENDPOINT)
    fetch(`${config.API_ENDPOINT}/songs`)
  
  .then((res)=>{
    // console.log(res)
    if(!res.ok){
    return res.json().then(e=> Promise.reject(e))
    }
    return res.json()
})
.then((res)=>{
  console.log("check",res)
  this.setState({songs:res})
})
.catch(error=>{
console.log(error)
})
}


addSong(song) {
  
}

// ValidateSong(Name, value){
// if(value.trim() === ''){
//   return `${Name} is required`
// }
// return null
// }

//   validate(){
//   name: name => this.ValidateSong('name', name),

// }


  render(){
    console.log('TEST2', this.state.songs)
    console.log('init2')

  return (

    <main className='App'>
      
        <Route path ='/' component={Main} /> 
    
      <Route path='/S' component={SplashPage} />
      <Route path ='/Form' render={()=> <Form songs={this.state.songs}/> } />
     <Route path ='/sent' component={Sent} />
     <Route path ='/vote' render={()=>< Vote songs={this.state.songs}/>} />
     <Route path = '/Review' component={Review} />
     <Route path = '/Review-Sent' component={ReviewSent} />
      
    
    </main>
  );
  }
}

export default App;

//  {/* <a href = "../form/reqeust-form.html"></a> */}
//  <button class ="req">Send Request</button> 
//  {/* </a><br></br> */}
//  {/* <a href="../vote/vote.html"> */}
//    <button class ="req">Vote Best Choices</button> 
//  {/* </a><br></br> */}
//  {/* <a href="../review/review-form.html"> */}
// <button class ="req">Give a DJ Review</button> 
// {/* </a><br></br> */}

