import React from 'react';
import Description from './index'
import { shallow } from 'enzyme';

import ReactQuill from 'react-quill';

describe('Component > Description', () => {
    it('Render a quill editor', () => {
        const props = {
            placeholder: 'Test placeholder'
        }

        const description = shallow(<Description {...props} />);
        expect(description.is(ReactQuill)).toEqual(true);
    })
})
