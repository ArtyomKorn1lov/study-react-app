import styles from "./chat-component.module.scss";
import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ChatItemComponent from "../chat-item-component/chat-item-component";
import PropTypes from 'prop-types';
import axios from "axios";
import ServerDataService from "../../../services/server-data.service";
import MessageCreateModel from "../../../models/TelegramModels/MessageCreateModel";
import MessageUpdateModel from "../../../models/TelegramModels/MessageUpdateModel";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from "react-router-dom";

const ChatComponent = ({ curUserId }) => {
    const { senderId } = useParams();
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const [curIndex, setIndex] = useState(-1);

    useEffect(() => {
        getServerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [senderId]);

    const getServerData = async () => {
        await axios.get(ServerDataService.apiUrl + "api/telegram/all/" + curUserId + "/" + senderId + "/")
            .then((response) => {
                setMessages(ServerDataService.convertTelegramMessages(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const addMessage = async () => {
        if (text.trim("") === "" || curUserId === undefined) {
            return;
        }
        if (curIndex >= 0 && messages[curIndex] !== undefined
            && messages[curIndex].userId === curUserId && messages[curIndex].id > 0) {
            await axios.put(ServerDataService.apiUrl + "api/messages/update",
                new MessageUpdateModel(
                    messages[curIndex].id,
                    text, 
                    curUserId,
                    messages[curIndex].senderId
                ))
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            cancelEdit();
            await getServerData();
            return;
        }
        await axios.post(ServerDataService.apiUrl + "api/messages/add",
            new MessageCreateModel(
                text,
                curUserId,
                senderId
            ))
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        cancelEdit();
        await getServerData();
    };

    const removeMessage = async () => {
        if (curIndex < 0 || messages[curIndex].id === undefined || messages[curIndex].id <= 0) {
            return;
        }
        const result = confirm("Вы уверены, что хотите удалить сообщение?");
        if (!result) {
            return;
        }
        await axios.delete(ServerDataService.apiUrl + "api/messages/delete/" + messages[curIndex].id + "/")
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        cancelEdit();
        await getServerData();
    }

    const setToEdit = (index) => {
        if (curIndex === index) {
            cancelEdit();
            return;
        }
        if (index < 0 || messages[index].userId !== curUserId) {
            return;
        }
        setIndex(index);
        setText(messages[index].text);
    }

    const cancelEdit = () => {
        setIndex(-1);
        setText("");
    }

    let sendIcon = <SendIcon onClick={addMessage} />;
    return (
        <div className={styles.messages}>
            <div className={styles.messages_field}>
                {
                    messages.map((element, index) => (
                        <ChatItemComponent key={index} message={element} curUserId={curUserId} editItem={() => setToEdit(index)} index={index} curIndex={curIndex} />
                    ))
                }
            </div>
            <form className={styles.form_input}>
                <TextField
                    sx={{
                        "& .MuiInputBase-root": {
                            color: 'primary.main'
                        },
                        "& .MuiFormLabel-root": {
                            color: 'primary.main'
                        },
                        "& .MuiInputBase-root:before": {
                            borderColor: 'primary.main'
                        }
                    }}
                    value={text} onChange={(event) => setText(event.target.value)}
                    fullWidth={true} color="primary" label="Введите сообщение" variant="standard" type="text"
                    InputProps={{
                        endAdornment: (
                            sendIcon
                        )
                    }} />
                {curIndex >= 0 && <Button onClick={removeMessage} variant="outlined"><DeleteIcon /></Button>}
            </form>
        </div>
    );
}

ChatComponent.propTypes = {
    curUserId: PropTypes.number
}

export default ChatComponent;