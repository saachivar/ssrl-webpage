import logo from './logo.svg';
import './App.css';
import StarryBackground from './StarryBackground';

function App() {
  return (
    <div className="App">
      <StarryBackground />
      <div style={{ color: 'white', padding: '20px' }}>
        <h1>Welcome to LEARNSat</h1>
        <p>This is a creative display of space exploration!</p>
        </div>
    </div>
  );
}

export default App;
