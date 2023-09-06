import styles from './telegram-page.module.scss';
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Divider from '@mui/material/Divider';

const TelegramPage = () => {
    let sendIcon = <SendIcon />;
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <AccountCircleIcon sx={{ width: '50px', height: '50px' }} className={styles.margin_right} />
                <Typography
                    sx={{ display: 'inline', fontSize: "24px" }}
                    component="span"
                    variant="body2"
                    color="white"
                >
                    Здравствуйте, пользователь!
                </Typography>
            </div>
            <div className={styles.body_chat}>
                <div className={styles.users}>
                    <List sx={{ width: '100%', background: "#214366" }}>
                        <ListItem sx={{ cursor: "pointer" }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ color: "white" }}
                                primary="Артём Корнилов"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline', color: "white", textAlign: "start" }}
                                            component="span"
                                            variant="body2"
                                        >
                                            Привет!
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider component="li" sx={{ borderColor: "white" }} />
                        <ListItem sx={{ cursor: "pointer" }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ color: "white" }}
                                primary="Александра Смышляева"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline', color: "white", textAlign: "start" }}
                                            component="span"
                                            variant="body2"
                                        >
                                            Как дела?
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </div>
                <div className={styles.messages}>
                    <div className={styles.messages_field}>
                        <div className={styles.messages_item_left}>
                            <div className={styles.message_left}>
                                <Typography
                                    sx={{ display: 'inline', color: "white", textAlign: "start" }}
                                    component="span"
                                    variant="body2"
                                >
                                    Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение
                                </Typography>
                                <Typography
                                    sx={{ display: 'inline', color: "white", marginTop: "5px" }}
                                    component="span"
                                    variant="body2"
                                >
                                    12:16
                                </Typography>
                            </div>
                        </div>
                        <div className={styles.messages_item_right}>
                            <div className={styles.message_right}>
                                <Typography
                                    sx={{ display: 'inline', color: "white", textAlign: "start" }}
                                    component="span"
                                    variant="body2"
                                >
                                    Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение Текстовое сообщение
                                </Typography>
                                <Typography
                                    sx={{ display: 'inline', color: "white", marginTop: "5px" }}
                                    component="span"
                                    variant="body2"
                                >
                                    12:16
                                </Typography>
                            </div>
                        </div>
                        <div className={styles.messages_item_right}>
                            <div className={styles.message_right}>
                                <Typography
                                    sx={{ display: 'inline', color: "white", textAlign: "start" }}
                                    component="span"
                                    variant="body2"
                                >
                                    Привет!
                                </Typography>
                                <Typography
                                    sx={{ display: 'inline', color: "white", marginTop: "5px" }}
                                    component="span"
                                    variant="body2"
                                >
                                    12:16
                                </Typography>
                            </div>
                        </div>
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
            </div>
        </div>
    )
}

export default TelegramPage;