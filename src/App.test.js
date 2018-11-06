import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

import PhotoUpload from './components/photo-upload';
import Title from './components/title';
import QuillEditor from './components/description';
import { SuccessButton } from "./components/button";

describe('App', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(PhotoUpload).length).toEqual(1);
        expect(wrapper.find(Title).length).toEqual(1);
        expect(wrapper.find(QuillEditor).length).toEqual(1);
        expect(wrapper.find(SuccessButton).length).toEqual(1);
    });

    it('Test onImageChange', () => {
        const photos = [1, 2];
        const wrapper = shallow(<App />);

        // test onImageChange
        wrapper.instance().onImageChange(photos);
        expect(wrapper.state().photos.length).toEqual(photos.length);
    });
})
