import MessageModel from "./MessageModel";

export default class MessageModelChat extends MessageModel {
    constructor(text, author, date) {
        super(text, author);
        this.date = date;
    }
}