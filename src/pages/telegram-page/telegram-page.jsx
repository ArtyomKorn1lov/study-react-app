import styles from './telegram-page.module.scss';
import React, { useContext, useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import UsersComponent from '../../components/telegram/users-component/users-component';
import UserChatModel from "../../models/TelegramModels/UserModel";
import RegisterDialogComponent from '../../components/dialogs/register-dialog-component/register-dialog-component';
import AutorizeDialogComponent from '../../components/dialogs/autorize-dialog-component/autorize-dialog-component';
import Button from '@mui/material/Button';
import { UserContext } from '../../contexts/user-context';

const TelegramPage = () => {
    const curUser = new UserChatModel(1, "Артём Корнилов", "");
    const userContext = useContext(UserContext);
    const [openRegistration, setOpenRegistration] = useState(false);
    const [openAutorization, setOpenAutorization] = useState(false);

    useEffect(() => {
        getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getUserData = async () => {
        await userContext.getUserData();
    }

    const onOpenAutorize = () => {
        setOpenAutorization(true);
    }

    const onCloseAutorize = () => {
        setOpenAutorization(false);
    }

    const onOpenRegistration = () => {
        setOpenRegistration(true);
    }

    const onCloseRegistration = () => {
        setOpenRegistration(false);
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                {userContext.user.name && <AccountCircleIcon sx={{ width: '50px', height: '50px' }} className={styles.margin_right} />}
                {userContext.user.name &&
                    <Typography
                        sx={{ display: 'inline', fontSize: "24px" }}
                        component="span"
                        variant="body2"
                        color="white"
                    >
                        Здравствуйте, {curUser.name}!
                    </Typography>
                }
                {!userContext.user.name && <Button onClick={() => onOpenRegistration()} sx={{ marginLeft: '12px' }} variant="contained">Зарегистрироваться</Button>}
                {!userContext.user.name && <Button onClick={() => onOpenAutorize()} sx={{ marginLeft: '12px' }} variant="contained">Войти</Button>}
            </div>
            <UsersComponent curUserId={curUser.id} />
            <AutorizeDialogComponent open={openAutorization} onClose={() => onCloseAutorize()} />
            <RegisterDialogComponent open={openRegistration} onClose={() => onCloseRegistration()} />
        </div>
    )
}

export default TelegramPage;