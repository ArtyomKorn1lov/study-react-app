import './App.scss';
import MessageComponent from '../../components/message-component/message-component';
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import MessageListComponent from '../message-list-component/message-list-component';

const AppComponent = () => {
  const text = "Передаваемый пропсом текст";


  return (
    <div className="app">
      <header className="app__header">
        <div className='app__menu'>
          <Link to="/">На главную (Урок 1)</Link>
          <Link to="/message-list/">Урок 2</Link>
        </div>
        <MessageComponent text={text} />
        <Routes>
          <Route path="/message-list/" element={<MessageListComponent />} />
        </Routes>
      </header>
    </div>
  );
}

export default AppComponent;
