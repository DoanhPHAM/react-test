import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = React.forwardRef((props, ref) =>
    <div className="App-title">
        <input
            type="text"
            ref={ref}
            placeholder={props.placeholder}
        />
    </div>
);

Title.defaultProps = {
    placeholder: 'Điền tên món'
}

Title.propTypes = {
    placeholder: PropTypes.string
}

export default Title;
