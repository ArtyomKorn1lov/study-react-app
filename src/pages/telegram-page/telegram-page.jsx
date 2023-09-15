import styles from './telegram-page.module.scss';
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import UsersComponent from '../../components/telegram/users-component/users-component';
import UserChatModel from "../../models/TelegramModels/UserModel";

const TelegramPage = () => {
    const curUser = new UserChatModel(1, "Артём Корнилов", "");

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
                    Здравствуйте, {curUser.name}!
                </Typography>
            </div>
            <UsersComponent curUserId={curUser.id} />
        </div>
    )
}

export default TelegramPage;