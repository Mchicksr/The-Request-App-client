import React from 'react'
import Main from './Main'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

it('renders without crashing,',()=>{
    const div = document.createElement('div');
    ReactDOM.render( <BrowserRouter ><Main /></BrowserRouter>, div)
    })


it("matches snapshot main", () => {
      const tree = renderer.create(  <a class="req" href="/Main"> Send Request </a>).toJSON();
  
    expect(tree).toMatchSnapshot();
  })