import './App.scss';
import MessageComponent from '../../components/message-component/message-component';
import React from "react";

const AppComponent = () => {
  const text = "Передаваемый пропсом текст";

  return (
    <div className="app">
      <header className="app__header">
        <MessageComponent text={text} />
      </header>
    </div>
  );
}

export default AppComponent;
