import './App.css';
import Box from './component/Box';


function App() {
  return (
    <>
      <div className="container">
        <Box title="player" />
        <Box title="computer" />
      </div>
      <div className="button-wrap">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </>
  );
}

export default App;
