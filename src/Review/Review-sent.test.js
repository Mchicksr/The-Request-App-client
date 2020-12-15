import React from 'react'
import ReviewSent from './Review-sent'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Review from './Review'

it('renders without crashing,',()=>{
    const div = document.createElement('div');
    ReactDOM.render( <BrowserRouter ><ReviewSent /></BrowserRouter>, div)
    })


it("matches snapshot reviewSent", () => {
    
      const tree = renderer.create(  <a class="req" href="/Review-sent"> Send Request </a>).toJSON();
  
    expect(tree).toMatchSnapshot();
  })