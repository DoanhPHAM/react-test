import React, { Component } from 'react';
import './App.css';

import PhotoUpload from './components/photo-upload';
import Title from './components/title';
import QuillEditor from './components/description';
import { SuccessButton } from "./components/button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            photos: []
        }

        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();

        this.onSubmit = this.onSubmit.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange(photos) {
        this.setState({ photos });
    }

    onSubmit() {
        this.validateData();
    }

    /**
     * Validate data after click submit
     */
    validateData() {
        const title = this.titleRef.current.value;
        let description = this.descriptionRef.current.state.value;

        let hasPhoto = this.state.photos.length;
        let hasTitle = true;
        let hasDescription = true;

        // Validate photos
        if (!hasPhoto) {
            this.showError('You must upload at least 1 photo');
        }

        // Validate title
        if (title == null || title.trim() === '') {
            hasTitle = false;
            this.showError('Title can not empty');
        }

        description = !!description ? description : ''
        // Remove all html tag
        const descriptionContent = description.replace(/<\/?(?!(img)\b)\w+[^>]*>/gm, '');
        if (descriptionContent === '') {
            hasDescription = false;
            this.showError('Description can not empty');
        }

        return hasPhoto && hasTitle && hasDescription;
    }

    /**
     * Show toast error
     * @param {string} errorMessage
     */
    showError(errorMessage) {
        toast.error(errorMessage, { position: toast.POSITION.TOP_RIGHT });
    }

    render() {
        return (
            <div className="App">
                <ToastContainer autoClose={2000} />
                <PhotoUpload onImageChange={this.onImageChange} />
                <Title ref={this.titleRef} />
                <QuillEditor ref={this.descriptionRef} />
                <div className='App-submit'>
                    <SuccessButton title='Submit' onClick={this.onSubmit} />
                </div>
            </div>
        );
    }
}

export default App;
