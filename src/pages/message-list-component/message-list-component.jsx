import "./message-list-component.scss";
import React from "react";
//import PropTypes from 'prop-types';
import { useState } from "react";
import MessageModel from "../../models/MessageModel.jsx";

const MessageListComponent = () => {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState(new MessageModel("", ""));
    const [currentIndex, setIndex] = useState(-1);

    const addAuthor = () => {
        if (message.text.trim("") === "" || message.author.trim("") === "") {
            return;
        }
        if (currentIndex > 0 && messageList[currentIndex] !== undefined) {
            messageList[currentIndex].text = message.text;
            messageList[currentIndex].author = message.author;
            setIndex(-1);
            setMessageList([
                ...messageList
            ]);
            return;
        }
        setMessageList([...messageList, new MessageModel(message.text, message.author)]);
    }

    const setToEdit = (index) => {
        if (index < 0) {
            return;
        }
        setIndex(index);
        setMessage(new MessageModel(messageList[index].text, messageList[index].author));
    } 

    return (
        <div className="message">
            <div className="message__form">
                <span>Добавить сообщение:</span>
                <span>Текст сообщения:</span>
                <input type="text" value={message.text} onChange={(e) => setMessage({ ...message, text: e.target.value })} />
                <span>Автор сообщения:</span>
                <input type="text" value={message.author} onChange={(e) => setMessage({ ...message, author: e.target.value })} />
                <button onClick={addAuthor}>Добавить</button>
            </div>
            <span>Список сообщений:</span>
            <div className="message__list">
                {
                    messageList.map((el, index) => (
                        <div className="message__item" key={index}>
                            <span className="item__span">{index}</span>
                            <span className="item__span">Текст сообщения - {el.text}</span>
                            <span className="item__span">Автор сообщения - {el.author}</span>
                            <button onClick={() => setToEdit(index)}>Редактировать</button>
                            <button>Удалить</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MessageListComponent;