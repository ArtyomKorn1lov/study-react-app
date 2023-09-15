import './App.scss';
import MessageComponent from '../../components/message-component/message-component';
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import MessageListComponent from '../../components/message-list-component/message-list-component';
import ChatPage from '../chat-page/chat-page';
import { ThemeProvider, createTheme } from '@mui/material';
import TelegramPage from '../telegram-page/telegram-page';

const theme = createTheme({
  multilineColor: {
    color: 'white'
  }
});

const AppPage = () => {
  const text = "Передаваемый пропсом текст";
  const [curUrl, setCurUrl] = useState("/");
  const [stateUrl, setStateUrl] = useState(false);

  useEffect(() => {
    setCurUrl(window.location.pathname)
  }, [stateUrl]);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <header className="app__header">
          <div className='app__menu'>
            <Link onClick={() => setStateUrl(!stateUrl)} to="/">На главную (Урок 1)</Link>
            <Link onClick={() => setStateUrl(!stateUrl)} to="/message-list/">Урок 2</Link>
            <Link onClick={() => setStateUrl(!stateUrl)} to="/chat/">Урок 3</Link>
            <Link onClick={() => setStateUrl(!stateUrl)} to="/telegram/">Урок 4</Link>
          </div>
          {curUrl === "/" && <MessageComponent text={text} />}
          <Routes>
            <Route path="/message-list/" element={<MessageListComponent />} />
            <Route path="/chat/" element={<ChatPage />} />
            <Route path="/telegram/*" element={<TelegramPage />} />
          </Routes>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default AppPage;
