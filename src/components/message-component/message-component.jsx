import "./message-component.css";
import React from "react";
import PropTypes from 'prop-types';

MessageComponent.propTypes = {
    text: PropTypes.string,
}

const MessageComponent = (props) => {
    return (
        <h1 className='red-text'>{props.text}</h1>
    );
}

export default MessageComponent;