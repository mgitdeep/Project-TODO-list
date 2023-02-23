import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  // const name = "Mondeep";

  return (
    <div className="App">
      
        <Header></Header>
        {/* <header></header>                 Don't put this small header, put this Header with H in caps*/}
        <Content></Content>

        <Footer></Footer>

    </div>
  );
}

export default App;
