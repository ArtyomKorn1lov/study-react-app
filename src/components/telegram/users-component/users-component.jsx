import styles from "./users-component.module.scss";
import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import ChatComponent from "../chat-component/chat-component";
import UserItemComponent from "../user-item-component/user-item-component";
import PropTypes from 'prop-types';
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import ServerDataService from "../../../services/server-data.service";

const UsersComponent = ({ curUserId }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getServerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getServerData = async () => {
        await axios.get(ServerDataService.apiUrl + "api/telegram/getUsers/" + curUserId)
        .then((response) => {
            setUsers(ServerDataService.convertTelegramUsers(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    };

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
            <Routes>
                <Route path="user/:senderId" element={<ChatComponent curUserId={curUserId} />} />
                <Route path="*" element={
                    <div className={styles.messages}>
                        <h1>Выберете чат</h1>
                    </div>
                } />
            </Routes>
        </div>
    );
}

UsersComponent.propTypes = {
    curUserId: PropTypes.number
}

export default UsersComponent;