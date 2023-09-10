import styles from "./chat-item-component.module.scss";
import React from "react";
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const ChatItemComponent = ({message}) => {
    let messageItemClass = styles.messages_item_left;
    let messageTextAlign = styles.message_left;
    if (message.userId === 1) {
        messageItemClass = styles.messages_item_right;
        messageTextAlign = styles.message_right;
    }
    return (
        <div className={messageItemClass}>
            <div className={messageTextAlign}>
                <Typography
                    sx={{ display: 'inline', color: "white", textAlign: "start" }}
                    component="span"
                    variant="body2"
                >
                    {message.text}
                </Typography>
                <Typography
                    sx={{ display: 'inline', color: "white", marginTop: "5px" }}
                    component="span"
                    variant="body2"
                >
                    {message.created.toLocaleDateString() + ", " + message.created.toLocaleTimeString().slice(0, -3)}
                </Typography>
            </div>
        </div>
    );
}

ChatItemComponent.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        created: PropTypes.object,
        edited: PropTypes.object,
        userId: PropTypes.number,
        senderId: PropTypes.number
    })
}

export default ChatItemComponent;
