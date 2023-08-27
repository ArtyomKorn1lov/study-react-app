import './App.css';
import MessageComponent from '../../components/message-component/message-component';
import React from "react";

const AppComponent = () => {
  const text = "Передаваемый пропсом текст";

  return (
    <div className="App">
      <header className="App-header">
        <MessageComponent text={text} />
      </header>
    </div>
  );
}

export default AppComponent;
