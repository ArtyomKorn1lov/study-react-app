import MessageModelChat from "../models/MessagesModels/MessageModelChat";
import UserModel from "../models/MessagesModels/UserModel";
import MessageModel from "../models/TelegramModels/MessageModel";

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
    }
}

export default ServerDataService;