import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  // const name = "Mondeep";

  return (
    <div className="App">
      <header className="App-header">
        
        <Header></Header>
        {/* <header></header>                 Don't put this small header, put this Header with H in caps*/}
        <Content />

      </header>
      {/* <p>HTML</p> */}
    </div>
  );
}

export default App;
