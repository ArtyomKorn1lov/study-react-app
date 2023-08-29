import "./message-list-component.scss";
import React from "react";
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

    const cancelEdit = () => {
        setMessage(new MessageModel("", ""));
        setIndex(-1);
    }

    const remove = (index) => {
        messageList.splice(index, 1);
        setMessageList([...messageList]);
        if (index == currentIndex) {
            cancelEdit();
        }
    }

    return (
        <div className="message">
            <div className="message__form">
                <span className="form__span">Добавить сообщение:</span>
                <span className="form__span -margin-top">Текст сообщения:</span>
                <textarea className="form__textarea" type="text" value={message.text} onChange={(e) => setMessage({ ...message, text: e.target.value })} />
                <span className="form__span">Автор сообщения:</span>
                <input className="form__input" type="text" value={message.author} onChange={(e) => setMessage({ ...message, author: e.target.value })} />
                <button className="form__button" onClick={addAuthor}>{currentIndex < 0 ? ("Добавить") : ("Изменить")}</button>
                {currentIndex >= 0 && <button className="form__button" onClick={cancelEdit}>Отменить редактирование</button>}
            </div>
            <span>{messageList.length > 0 ? ("Список сообщений:") : ("Список сообщений пуст")}</span>
            {messageList.length > 0 &&
                <div className="message__list">
                    {
                        messageList.map((el, index) => (
                            <div className="message__item" key={index}>
                                <span className="item__span">{index}</span>
                                <span className="item__span">Текст сообщения - {el.text}</span>
                                <span className="item__span">Автор сообщения - {el.author}</span>
                                <button className="form__button -list-margin" onClick={() => setToEdit(index)}>Редактировать</button>
                                <button className="form__button" onClick={() => remove(index)}>Удалить</button>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default MessageListComponent;