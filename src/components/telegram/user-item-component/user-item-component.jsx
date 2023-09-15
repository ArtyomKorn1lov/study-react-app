import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const UserItemComponent = ({userItem}) => {
    const navigate = useNavigate();

    return (
        <ListItem onClick={() => navigate(`user/${userItem.id}`)} sx={{ cursor: "pointer" }}>
            <ListItemAvatar>
                <Avatar>
                    <AccountCircleIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                sx={{ color: "white" }}
                primary={userItem.name}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline', color: "white", textAlign: "start" }}
                            component="span"
                            variant="body2"
                        >
                            {userItem.lastMessage}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

UserItemComponent.propTypes = {
    userItem: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        lastMessage: PropTypes.string
    })
}

export default UserItemComponent;