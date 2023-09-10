import styles from "./users-component.module.scss";
import React from "react";
import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import ChatComponent from "../chat-component/chat-component";
import UserItemComponent from "../user-item-component/user-item-component";

const UsersComponent = () => {
    const users = [
        {
            id: 1,
            name: "Артём Корнилов",
            lastMessage: "Привет!"
        },
        {
            id: 2,
            name: "Александра Смышляева",
            lastMessage: "Как дела?"
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
            <ChatComponent />
        </div>
    );
}

export default UsersComponent;