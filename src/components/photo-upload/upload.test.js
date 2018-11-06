import React from 'react';
import DropZone from 'react-dropzone';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import PhotoUpload from '.';

import logo from './retro.svg'

describe('Component > Photo upload', () => {
    it('Render a dropzone', () => {
        const wrapper = shallow(<PhotoUpload />)
        expect(wrapper.is(DropZone)).toEqual(true);
        expect(wrapper.find('.App-upload__placeholder').length).toEqual(1);
        expect(wrapper.find('.image').length).toEqual(1);
        expect(wrapper.find('.placeholder').length).toEqual(1);
    });

    it('Test drop and remove image', () => {
        global.URL.createObjectURL = jest.fn();
        const props = {
            onImageChange: sinon.spy()
        }

        const wrapper = shallow(<PhotoUpload {...props} />);
        const file = new Blob(["fileContents"], { type: "image/jpeg" });

        // Test onDrop functions
        wrapper.instance().onDrop([]);
        expect(wrapper.state('allImages').length).toEqual(0);

        wrapper.instance().onDrop([file]);
        expect(wrapper.state('allImages').length).toEqual(1);
        expect(wrapper.find('.App-upload__preview-item').length).toEqual(1);

        // Test mergeFiles function
        const state = wrapper.instance().mergeFiles([file]);
        expect(wrapper.state('allImages').length).toEqual(2);
        wrapper.instance().forceUpdate();
        expect(wrapper.find('.App-upload__preview-item').length).toEqual(2);

        // Test onRemoveImage
        const event = { stopPropagation: jest.fn() };
        wrapper.instance().onRemoveImage(state[0].id, event);
        expect(wrapper.state('allImages').length).toEqual(1);
        expect(wrapper.find('.App-upload__preview-item').length).toEqual(1);
    });
});
