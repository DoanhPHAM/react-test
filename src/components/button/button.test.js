import React from 'react';
import Button from './index'
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Component > Button', () => {
    it('Render a button', () => {
        const props = {
            title: 'Test title',
            color: 'warning',
            onClick: sinon.spy()
        }

        const button = shallow(<Button {...props} />);

        expect(button.find('button').length).toEqual(1); // Has 1 button element
        expect(button.find(`.btn`).length).toEqual(1);
        expect(button.find(`.btn-${props.color}`).length).toEqual(1);
        expect(button.text()).toEqual(props.title);

        button.find('button').simulate('click');
        expect(props.onClick.calledOnce).toEqual(true);
    })
})
