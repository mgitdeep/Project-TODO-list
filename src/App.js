import logo from './logo.svg';
import './App.css';

function App() {
  // const name = "Mondeep";
  const handleNameChange = () => {
    const names = [ "Dave", "Ram", "Bob" ];
    const int = Math.floor(Math.random() * 3);

    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to see changes.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <p>Hello {handleNameChange()} Developer!</p>

        {/* <p>{"mgitdeep"}</p>
        <p>{[ 1, 2, 3 ]}</p> */}

        {/* <p>{{ name: 'obj', num: 3 }}</p>
        <p>{{ a: 1, b: 2 }}</p> */}

        {/* <p>{name}</p> */}
      </header>
      {/* <p>HTML</p> */}
    </div>
  );
}

export default App;
