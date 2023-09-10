import styles from "./chat-component.module.scss";
import React from "react";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ChatItemComponent from "../chat-item-component/chat-item-component";

const ChatComponent = () => {
    const messages = [
        {
            id: 1,
            text: "Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение",
            created: new Date(),
            edited: new Date(),
            userId: 1,
            senderId: 2,
        },
        {
            id: 2,
            text: "Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение",
            created: new Date(),
            edited: new Date(),
            userId: 2,
            senderId: 1,
        },
        {
            id: 3,
            text: "Привет!",
            created: new Date(),
            edited: new Date(),
            userId: 1,
            senderId: 2,
        },
        {
            id: 4,
            text: "Как дела?",
            created: new Date(),
            edited: new Date(),
            userId: 2,
            senderId: 1,
        },
    ]

    let sendIcon = <SendIcon />;
    return (
        <div className={styles.messages}>
                <div className={styles.messages_field}>
                    {
                        messages.map((element, index) => (
                            <ChatItemComponent key={index} message={element} />
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
                        fullWidth={true} color="primary" label="Введите сообщение" variant="standard" type="text"
                        InputProps={{
                            endAdornment: (
                                sendIcon
                            )
                        }} />
                </form>
            </div>
    );
}

export default ChatComponent;