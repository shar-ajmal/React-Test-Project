import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });

import Input from '../components/Input';

describe('Input', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Input/>, div);
    });
    
    /*it('displays states input', () => {
        const inputString = "Hello World!";
        const inputComponent = shallow(<Input/>);
        inputComponent.find('input').simulate('change', { target: { value: inputString } });

        //expect(inputComponent.state().value).toEqual(inputString);
    })*/
});


