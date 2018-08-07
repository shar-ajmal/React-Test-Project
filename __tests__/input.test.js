import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../src/input';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
});