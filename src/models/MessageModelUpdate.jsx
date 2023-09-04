import MessageModel from "./MessageModel";

export default class MessageModelUpdate extends MessageModel {
    constructor(id, text, author, date) {
        super(text, author);
        this.id = id;
        this.date = date;
    }
}