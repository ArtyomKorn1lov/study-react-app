import MessageModel from "./MessageModel";

export default class MessageModelCreate extends MessageModel {
    constructor(text, author, date, userId) {
        super(text, author);
        this.date = date;
        this.userId = userId;
    }
}