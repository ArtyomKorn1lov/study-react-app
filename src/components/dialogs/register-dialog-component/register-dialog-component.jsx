/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import { DialogTitle } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../../contexts/user-context";

const RegisterDialogComponent = ({ onClose, open }) => {
    const userContext = useContext(UserContext);

    return (
        <Dialog
            PaperProps={{
                style: {
                    backgroundColor: '#0a2138',
                    padding: '20px',
                },
            }}
            open={open} onClose={onClose}>
            <DialogTitle sx={{ m: 0, p: 2, color: 'primary.main' }} id="customized-dialog-title">
                Регистрация
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'primary.main',
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent sx={{borderColor: "transparent", padding: "12px 0"}} dividers>
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
                        },
                        width: '100%',
                        marginBottom: '12px'
                    }}
                    label="Логин" variant="standard"
                />
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
                        },
                        width: '100%',
                        marginBottom: '12px'
                    }}
                    label="Имя" variant="standard"
                />
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
                        },
                        width: '100%',
                        marginBottom: '12px'
                    }}
                    label="Пароль" variant="standard" type="password"
                />
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
                        },
                        width: '100%',
                        marginBottom: '12px'
                    }}
                    label="Повторите пароль" variant="standard" type="password"
                />
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center", marginTop: "12px" }}>
                <Button variant="contained">Зарегистрироваться</Button>
            </DialogActions>
        </Dialog>
    );
};

RegisterDialogComponent.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};

export default RegisterDialogComponent;