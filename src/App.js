import './App.css';

const Message = (props) => {
  return(
    <h1 className='red-text'>{props.text}</h1>
  );
}

const App = () => {
  const text = "Передаваемый пропсом текст";

  return (
    <div className="App">
      <header className="App-header">
        <Message text={text} />
      </header>
    </div>
  );
}

export default App;
