import React from 'react'
import Sent from './Sent'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

it('renders without crashing,',()=>{
    const div = document.createElement('div');
    ReactDOM.render( <BrowserRouter ><Sent /></BrowserRouter>, div)
    })


it("matches snapshot sent", () => {
    // const tree = renderer.create(<Button label="click me please"></Button>).toJSON();
      const tree = renderer.create(  <a class="req" href="/Sent"> Send Request </a>).toJSON();
  
    expect(tree).toMatchSnapshot();
  })