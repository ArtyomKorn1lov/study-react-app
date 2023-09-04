//import styles from "./chat-item-component.scss";
import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';
import Face3Icon from '@mui/icons-material/Face3';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const ChatItemComponent = ({ chatItem, profile, editItem }) => {

    let align = "left";
    if (chatItem.userId === profile) {
         align = "right";
    }
    return (
        <ListItem onClick={editItem} sx={{ cursor: "pointer", textAlign: align }}>
            <ListItemAvatar>
                <Avatar>
                    {chatItem.author === "Саша" ? (<Face3Icon />) : (<FaceIcon />)}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                sx={{ color: "black" }}
                primary={chatItem.author}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {chatItem.text}
                        </Typography><br/>
                        {chatItem.date}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}

ChatItemComponent.propTypes = {
    chatItem: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.object,
        userId: PropTypes.number
    }),
    profile: PropTypes.element.number,
    editItem: PropTypes.func
}

export default ChatItemComponent;