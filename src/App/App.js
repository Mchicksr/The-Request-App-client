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


class App extends Component {
  state ={
    songs: []
    
  }
componentDidMount(){
  
    fetch(`${config.API_ENDPOINT}/songs`)
  
  .then((res)=>{
      
    if(!res.ok){
    return res.json().then(e=> Promise.reject(e))
    }
    return res.json()
})
.then((res)=>{
  
  this.setState({songs:res})
})
.catch(error=>{

})
}


addSong(song) {
  
}




  render(){
   

  return (

    <main className='App'>
      
        <Route path ='/' component={Main} /> 
    
      <Route exact path='/' component={SplashPage} />
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


