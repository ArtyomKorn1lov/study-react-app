import styles from "./users-component.module.scss";
import React from "react";
import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import ChatComponent from "../chat-component/chat-component";
import UserItemComponent from "../user-item-component/user-item-component";
import PropTypes from 'prop-types';

const UsersComponent = ({curUserId}) => {
    const users = [
        {
            id: 2,
            name: "Александра Смышляева",
            lastMessage: "Как дела?"
        },
        {
            id: 3,
            name: "Антон Соколов",
            lastMessage: "Привет!"
        },
    ]

    return (
        <div className={styles.body_chat}>
            <div className={styles.users}>
                <List sx={{ width: '100%', background: "#214366" }}>
                    {
                        users.map((element, index) => (
                            <UserItemComponent key={index} userItem={element} />
                        ))
                    }
                    {/* <Divider component="li" sx={{ borderColor: "white" }} /> */}
                </List>
            </div>
            <ChatComponent curUserId={curUserId} />
        </div>
    );
}

UsersComponent.propTypes = {
    curUserId: PropTypes.number
}

export default UsersComponent;