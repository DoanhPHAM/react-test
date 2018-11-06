import React from 'react';
import PropTypes from 'prop-types';

import './button.css'

const Button = ({ title, color, onClick }) => (
    <button className={`btn btn-${color}`} onClick={onClick} type='button'>
        {title}
    </button>
)

Button.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    title: 'Test',
    color: 'Success'
}

const SuccessButton = (props) => <Button {...props} color='success' />

export { SuccessButton }

export default Button;
