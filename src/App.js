
import './App.css';
import Header from './Header';

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
        
        <Header></Header>
        {/* <header></header>                 Don't put this small header, put this Header with H in caps*/}

      </header>
      {/* <p>HTML</p> */}
    </div>
  );
}

export default App;
