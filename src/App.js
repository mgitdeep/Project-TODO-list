import Header from './Header';
import Content, { formatName } from './Content';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';

function App() {
  // let x = 10;
  // const [counter, setCounter] = useState(0)
  // const [ data, setData] = useState("Ram")

  // useEffect( () => {
  //   console.log("Component mounted!")
  // }, [counter])

  // function updateState() {
  //   setCounter(counter+1)
  //   console.log(counter)
  // }

  // function updateData() {
  //   setData("Seeta")
  // }

  // console.log(counter)
      
  const result = <p><b>{formatName("Krishna", "Arjun")}</b></p>;
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
      {/* <h1>Learning State {counter}</h1>
      <h1>Updating Data to {data}</h1>
      <button onClick={updateState}>Click Me</button> <br />
      <button onClick={updateData}>Update Data</button> */}

      {/* <Content name="Krishna" color="blue"/> */}
      {/* <p>{formatName("Krishna", "Arjun")}</p> */}
      {result}
    </>
    
  );
}

export default App;
