import React, { createContext, useCallback, useState } from "react"
import PropTypes from 'prop-types';
import axios from "axios";
import ServerDataService from "../services/server-data.service";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const userSetter = useCallback((userData) => {
        setUser(userData);
    }, []);

    const getUserData = useCallback(async () => {
        const isVeryfy = await veryfyToken();
        if (!isVeryfy) {
            return;
        }
        await axios.get(ServerDataService.apiUrl + "api/telegram/getUserData",
            {
                headers: {
                    login: localStorage.getItem("login"),
                    token: localStorage.getItem("accessToken")
                }
            })
            .then((resp) => {
                userSetter({
                    id: resp.data.Id,
                    login: resp.data.Login,
                    name: resp.data.Name
                });
            })
            .catch((error) => {
                console.log(error);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getAuthorizeData = useCallback(() => {
        return getHeadAuthoriseData();
    }, []);

    const veryfyToken = async () => {
        const token = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        const tokenExpire = localStorage.getItem("tokenExpire");
        if (!token || !refreshToken) {
            return false;
        }
        if (token && new Date(tokenExpire) > new Date()) {
            return true;
        }
        await axios.post(ServerDataService.apiUrl + "api/telegram/refresh", getHeadAuthoriseData())
        .then((resp) => {
            console.log("success");
            localStorage.setItem("accessToken", resp.data.accessToken);
            localStorage.setItem("tokenExpire", resp.data.tokenExpire);
        })
        .catch((error) => {
            console.log(error);
            //localStorage.clear();
            return false;
        });
        return true;
    };

    const getHeadAuthoriseData = () => {
        return {
            login: localStorage.getItem("login"),
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken"),
        };
    };

    return(
        <UserContext.Provider value={{
            user, 
            userSetter, 
            getUserData, 
            getAuthorizeData
        }}>{children}</UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.any
};