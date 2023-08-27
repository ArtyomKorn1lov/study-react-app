import "./message-component.scss";
import React from "react";
import PropTypes from 'prop-types';

const MessageComponent = (props) => {
    return (
        <h1 className='red-text'>{props.text}</h1>
    );
}

MessageComponent.propTypes = {
    text: PropTypes.string,
}

export default MessageComponent;