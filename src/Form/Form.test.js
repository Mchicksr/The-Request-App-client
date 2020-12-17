import React from 'react'
import Form from './Form '
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})
import renderer from 'react-test-renderer'

it('renders without crashing,',()=>{
    const div = document.createElement('div');
    ReactDOM.render( <Form />, div)
    })

it("renders form inputs", ()=>{
    const wrapper = shallow(<Form />)
    const welcome = <h2>How would you like to party</h2>
    expect(wrapper.contains(welcome)).toEqual(true)
})

it("matches snapshot 2", () => {
   
      const tree = renderer.create(  <a class="req" href="/Form"> Send Request </a>).toJSON();
  
    expect(tree).toMatchSnapshot();
  })
