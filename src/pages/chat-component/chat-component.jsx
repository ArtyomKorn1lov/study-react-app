import styles from "./chat-component.module.scss";
import React, { useState } from "react";
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

const ChatComponent = () => {
    const [isFocus, setFocus] = useState(false);
    const [curMessage, setCurMessage] = useState(new MessageModelChat("", "Артём", new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString().slice(0,-3)));
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurIndex] = useState(-1);

    const addMessage = () => {
        if (curMessage.text.trim("") === "" || curMessage.author === undefined) {
            return;
        }
        if (currentIndex >= 0 && messages[currentIndex] !== undefined && messages[currentIndex].author === curMessage.author) {
            messages[currentIndex] = {
                ...messages[currentIndex],
                text: curMessage.text,
                date: "Отредактировано в " + new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString().slice(0,-3)
            };
            setMessages([...messages]);
            cancelEdit();
            return;
        } 
        setMessages([...messages, new MessageModelChat(curMessage.text, curMessage.author, new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString().slice(0,-3))]);
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
        messages.splice(currentIndex, 1);
        setMessages([...messages]);
        cancelEdit();
    }

    const setToEdit = (index) => {
        if (index < 0 || messages[index].author !== curMessage.author) {
            return;
        }
        setCurIndex(index);
        setCurMessage({...curMessage, text: messages[index].text});
    }

    const cancelEdit = () => {
        setCurIndex(-1);
        setCurMessage(new MessageModelChat("", curMessage.author, new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString().slice(0,-3)));
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
                            <ChatItemComponent key={index} chatItem={element} profile={curMessage.author} editItem={() => setToEdit(index)} />
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
                    <FormControl className={styles.page__select}>
                        <InputLabel id="demo-simple-select-label">Автор сообщения</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Автор сообщения"
                            value={curMessage.author} onChange={(event) => setCurMessage({ ...curMessage, author: event.target.value })}
                            defaultValue="Артём"
                        >
                            <MenuItem value={"Артём"}><FaceIcon /> Артём</MenuItem>
                            <MenuItem value={"Саша"}><Face3Icon /> Саша</MenuItem>
                        </Select>
                    </FormControl>
                    {currentIndex >= 0 && <Button onClick={removeMessage} className={styles.page__button} variant="outlined"><DeleteIcon /></Button>}
                    {currentIndex >= 0 && <Button onClick={cancelEdit} className={styles.page__button} variant="outlined">Отменить редактирование</Button>}
                </div>
            </form>
        </div>
    )
}

export default ChatComponent;