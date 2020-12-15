import React from 'react'
import Vote from './Vote'
import ReactDOM from 'react-dom'

import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})
import renderer from 'react-test-renderer' 


it('renders without crashingV,',()=>{
    const div = document.createElement('div');
    ReactDOM.render( <Vote songs={[]}/>, div)
    })


    it("matches snapshot main", () => {
        // const tree = renderer.create(<Button label="click me please"></Button>).toJSON();
          const tree = renderer.create(  <a class="req" href="/Main"> Send Request </a>).toJSON();
      
        expect(tree).toMatchSnapshot();
      })

