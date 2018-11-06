import React, { Component } from "react";
import PropTypes from 'prop-types';

// For drag&drop image
import DropZone from 'react-dropzone';

import './upload.css';

class PhotoUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allImages: []
        }

        this.onDrop = this.onDrop.bind(this);
        this.onDropRejected = this.onDropRejected.bind(this);
    }

    /**
     * Handle on drop files
     * @param {array} files
     */
    onDrop(files) {
        if (files.length === 0) {
            return;
        }

        const allImages = this.mergeFiles(files);
        this.setState({ allImages });
        this.props.onImageChange(allImages);
    }

    /**
     * By default, only image is accepted
     */
    onDropRejected() {

    }

    /**
     * Merge new added files into allImages
     * Each file will have a id = timestamp + index
     * @param {array} newAdded
     */
    mergeFiles(newAddeds) {
        let files = this.state.allImages;
        for (let index = 0; index < newAddeds.length; index++) {
            const file = {
                file: newAddeds[index],
                id: `${index}${Date.now()}`
            }

            files.push(file);
        }

        return files;
    }

    /**
     *
     * @param {string} imageId
     * @param {MouseEvent} event
     */
    onRemoveImage(imageId, event) {
        event.stopPropagation(); // Disable dropzone open dialog
        let allImages = this.state.allImages
        allImages = allImages.filter((image) => imageId !== image.id);

        this.setState({ allImages });
        this.props.onImageChange(allImages);
    }

    /**
     * Render previews
     * @param {array} files
     */
    renderPreview(files) {
        return files.map((item) => (
            <div key={item.id} className='App-upload__preview-item'>
                <img src={URL.createObjectURL(item.file)} alt='' onClick={this.onClickImage} />
                <span onClick={this.onRemoveImage.bind(this, item.id)}>Remove file</span>
            </div>
        ));
    }

    /**
     * Just for stop dropzone open dialog
     * @param {MouseEvent} event
     */
    onClickImage(event) {
        event.stopPropagation();
    }

    render() {
        const allImages = this.state.allImages;

        return (
            <DropZone
                className='App-upload'
                multiple={this.props.multiple}
                onDrop={this.onDrop}
                onDropRejected={this.onDropRejected}
                accept="image/*"
            >
                <div className='App-upload__placeholder'>
                    <div className='image' />
                    <span className='placeholder'>{this.props.placeholder}</span>
                </div>
                {allImages.length > 0 ?
                    <div className='App-upload__previews'>
                        {this.renderPreview(allImages)}
                    </div> : null
                }
            </DropZone>
        );
    }
}

PhotoUpload.defaultProps = {
    placeholder: 'Up hình thành phẩm',
    multiple: false
}

PhotoUpload.propTypes = {
    placeholder: PropTypes.string,
    multiple: PropTypes.bool
}

export default PhotoUpload;
