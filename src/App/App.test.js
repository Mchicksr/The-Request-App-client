import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

// import "@testing-library/jest-dom"



it('renders without crashing,',()=>{
const div = document.createElement('div');
ReactDOM.render( <BrowserRouter ><App /></BrowserRouter>, div)
})

it("matches snapshot 1", () => {
  // const tree = renderer.create(<Button label="click me please"></Button>).toJSON();
    const tree = renderer.create(  <a class="req" href="/Form"> Send Request </a>).toJSON();

  expect(tree).toMatchSnapshot();
})



//snapshot
//unit test on the form comp
//smoke test on view

//unit :test fields
  // test when it does not work
    //ex when the lenght is to long
    //test every if else in function and function

