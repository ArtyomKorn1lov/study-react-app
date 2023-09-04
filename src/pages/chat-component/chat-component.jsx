import styles from "./chat-component.module.scss";
import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import FaceIcon from '@mui/icons-material/Face';
import Face3Icon from '@mui/icons-material/Face3';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatItemComponent from "./chat-item-component/chat-item-component";
import MessageModelChat from "../../models/MessageModelChat";
import MessageModelCreate from "../../models/MessageModelCreate";
import axios from 'axios';
import ServerDataService from "../../services/server-data.service";
import MessageModelUpdate from "../../models/MessageModelUpdate";

const apiUrl = "http://localhost:3001/";

const ChatComponent = () => {
    const [isFocus, setFocus] = useState(false);
    const [curMessage, setCurMessage] = useState(new MessageModelChat(0, "", "Артём", new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString().slice(0, -3), 0));
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurIndex] = useState(-1);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(apiUrl + "api/messages/all")
            .then((resp) => {
                setMessages(ServerDataService.convertMessages(resp.data));
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get(apiUrl + "api/users/all")
            .then((resp) => {
                setUsers(ServerDataService.convertUsers(resp.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const addMessage = () => {
        if (curMessage.text.trim("") === "" || curMessage.userId === undefined) {
            return;
        }
        if (currentIndex >= 0 && messages[currentIndex] !== undefined && messages[currentIndex].userId === curMessage.userId) {
            axios.post(apiUrl + 'api/messages/add', new MessageModelUpdate(messages[currentIndex].id, curMessage.text, messages[currentIndex].author, "Отредактировано в " + new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString().slice(0, -3)))
                .then((resp) => {
                    console.log(resp);
                })
                .catch((error) => {
                    console.log(error);
                });
            cancelEdit();
            return;
        }
        axios.post(apiUrl + 'api/messages/add', new MessageModelCreate(curMessage.text, curMessage.author, new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString().slice(0, -3), curMessage.userId))
            .then((resp) => {
                console.log(resp);
            })
            .catch((error) => {
                console.log(error);
            });
        cancelEdit();
    }

    const removeMessage = () => {
        if (currentIndex < 0) {
            return;
        }
        let result = confirm("Вы уверены, что хотите удалить сообщение?");
        if (!result) {
            return;
        }
        console.log(curMessage);
        axios.post(apiUrl + 'api/messages/delete', { id: curMessage.id })
            .then((resp) => {
                console.log(resp);
            })
            .catch((error) => {
                console.log(error);
            });
        cancelEdit();
    }

    const setToEdit = (index) => {
        if (index < 0 || messages[index].userId !== curMessage.userId) {
            return;
        }
        setCurIndex(index);
        setCurMessage({ ...curMessage, id: messages[index].id, text: messages[index].text });
    }

    const cancelEdit = () => {
        setCurIndex(-1);
        setCurMessage(new MessageModelChat(0, "", curMessage.author, new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString().slice(0, -3), 0));
    }

    let labelMessageInput = "Введите сообщение";
    if (currentIndex >= 0) {
        labelMessageInput = "Редактирование сообщения"
    }
    let sendIcon = <SendIcon onClick={addMessage} />;
    if (isFocus) {
        sendIcon = <SendIcon onClick={addMessage} style={{ color: '#1976d2' }} />
    }
    return (
        <div className={styles.page}>
            <h3 className={styles.page__title}>Голубой чат</h3>
            <hr color="#1976d2" width="100%" />
            {messages.length > 0 ? (
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {
                        messages.map((element, index) => (
                            <ChatItemComponent key={index} chatItem={element} profile={curMessage.userId} editItem={() => setToEdit(index)} />
                        ))
                    }
                </List>
            ) : (
                <h3 className={styles.page__empty}>Список сообщений пуст</h3>
            )}
            <hr color="#1976d2" width="100%" />
            <form className={styles.page__form}>
                <TextField onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                    value={curMessage.text} onChange={(event) => setCurMessage({ ...curMessage, text: event.target.value })}
                    fullWidth={true} color="primary" label={labelMessageInput} variant="standard" type="text"
                    InputProps={{
                        endAdornment: (
                            sendIcon
                        )
                    }} />
                <br />
                <div className={styles.page__options}>
                    {users.length > 0 &&
                        <FormControl className={styles.page__select}>
                            <InputLabel id="demo-simple-select-label">Автор сообщения</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Автор сообщения"
                                value={{ name: curMessage.author, id: curMessage.userId }} onChange={(event) => setCurMessage({ ...curMessage, author: event.target.value.name, userId: event.target.value.id })}
                                defaultValue={{ name: curMessage.author, id: curMessage.userId }}
                            >
                                {
                                    users.map((element, index) => (
                                        <MenuItem key={index} value={element}>{element.name === "Саша" ? (<Face3Icon />) : (<FaceIcon />)} {element.name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    }
                    {currentIndex >= 0 && <Button onClick={removeMessage} className={styles.page__button} variant="outlined"><DeleteIcon /></Button>}
                    {currentIndex >= 0 && <Button onClick={cancelEdit} className={styles.page__button} variant="outlined">Отменить редактирование</Button>}
                </div>
            </form>
        </div>
    )
}

export default ChatComponent;