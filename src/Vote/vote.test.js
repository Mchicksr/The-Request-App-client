import React from 'react'
import Vote from './Vote'
import ReactDOM from 'react-dom'

import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})

 


it('renders without crashingV,',()=>{
    const div = document.createElement('div');
    ReactDOM.render( <Vote songs={[]}/>, div)
    })




