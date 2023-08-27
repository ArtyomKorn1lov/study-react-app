import "./message-component.css";

const MessageComponent = (props) => {
    return (
        <h1 className='red-text'>{props.text}</h1>
    );
}

export default MessageComponent;