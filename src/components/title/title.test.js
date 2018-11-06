import React from 'react';
import { shallow } from 'enzyme';

import Title from './index'

describe('Component > Title', () => {
    it('Render an input', () => {
        const wrapper = shallow(<Title />);

        expect(wrapper.find('.App-title').length).toEqual(1);
        expect(wrapper.find('input').length).toEqual(1);
    })
})
