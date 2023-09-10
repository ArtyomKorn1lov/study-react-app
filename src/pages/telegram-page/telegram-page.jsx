import styles from './telegram-page.module.scss';
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import UsersComponent from '../../components/telegram/users-component/users-component';

const TelegramPage = () => {
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
            <UsersComponent />
        </div>
    )
}

export default TelegramPage;