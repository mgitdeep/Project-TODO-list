import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';

function App() {
  // let x = 10;
  const [x, y] = useState(0)
  

  useEffect( () => {
    console.log("Component mounted!")
  }, [])

  function updateState() {
    y(x+1)
    console.log(x)
  }

  console.log(x)
  return (
    // <div className="App">
      
    //     <Header></Header>
    //     {/* <header></header>                 Don't put this small header, put this Header with H in caps*/}
    //     <Content></Content>

    //     <Footer></Footer>

    // </div>
    <>
      {/* <Content name="Yoshita" />
      <Content name="Aparajita" /> */}
      <h1>Learning State {x}</h1>
      <button onClick={updateState}>Click Me</button>
    </>
    
  );
}

export default App;
