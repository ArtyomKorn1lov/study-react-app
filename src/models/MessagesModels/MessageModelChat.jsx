import MessageModel from "./MessageModel";

export default class MessageModelChat extends MessageModel {
    constructor(id, text, author, date, userId) {
        super(text, author);
        this.id = id;
        this.date = date;
        this.userId = userId;
    }
}