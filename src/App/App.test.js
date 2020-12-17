import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'





it('renders without crashing,',()=>{
const div = document.createElement('div');
ReactDOM.render( <BrowserRouter ><App /></BrowserRouter>, div)
})

it("matches snapshot 1", () => {
  
    const tree = renderer.create(  <a class="req" href="/Form"> Send Request </a>).toJSON();

  expect(tree).toMatchSnapshot();
})



