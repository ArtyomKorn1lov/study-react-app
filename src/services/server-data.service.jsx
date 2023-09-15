import MessageModelChat from "../models/MessagesModels/MessageModelChat";
import UserModel from "../models/MessagesModels/UserModel";
import MessageModel from "../models/TelegramModels/MessageModel";
import UserModelTelegram from "../models/TelegramModels/UserModel";

const ServerDataService = {
    apiUrl: "http://localhost:3001/",

    convertMessages: function(serverData) {
        return serverData.map((el) => this.convertMessage(el));
    },
    convertMessage: function(message) {
        return new MessageModelChat(message.Id, message.Text, message.Name, new Date(message.Date), message.UserId);
    },
    convertUsers: function(serverData) { 
        return serverData.map((el) => this.convertUser(el));
    },
    convertUser: function(user) {
        return new UserModel(user.Id, user.Name);
    },
    convertTelegramMessages: function(serverData) {
        return serverData.map((el) => this.convertTelegramMessage(el));
    },
    convertTelegramMessage: function(data) {
        return new MessageModel(
            data.Id,
            data.Text,
            new Date(data.CREATED),
            new Date(data.EDITED),
            data.AuthorId,
            data.SenderId
        );
    },
    convertTelegramUsers: function(serverData) {
        return serverData.map((el) => this.convertTelegramUser(el));
    },
    convertTelegramUser: function(data) {
        return new UserModelTelegram(
            data.Id,
            data.Login,
            "Пользователь телеграма"
        )
    }
}

export default ServerDataService;