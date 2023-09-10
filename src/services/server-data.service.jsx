import MessageModelChat from "../models/MessagesModels/MessageModelChat";
import UserModel from "../models/MessagesModels/UserModel";

const ServerDataService = {
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
    }
}

export default ServerDataService;