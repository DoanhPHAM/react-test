import React from 'react';
import PropTypes from 'prop-types';

// Import editor styles
import './editor.css';

// Import for quill
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from '../../libs/quill-image-resize-module/ImageResize';
import VideoResize from '../../libs/quill-video-resize-module/VideoResize';

Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/videoResize', VideoResize);

const QuillEditor = React.forwardRef((props, ref) =>
    <ReactQuill
        {...props}
        ref={ref}
        className='App-description'
        theme={QuillEditor.theme}
        modules={QuillEditor.modules}
        formats={QuillEditor.formats}
    />
);

QuillEditor.defaultProps = {
    placeholder: 'Enter news content here...'
}

QuillEditor.propTypes = {
    placeholder: PropTypes.string,
    innerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
}

QuillEditor.theme = 'snow';

QuillEditor.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    imageResize: {
        modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
    },
    videoResize: {
        modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
    }
};

QuillEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

export { QuillEditor };

export default QuillEditor;
