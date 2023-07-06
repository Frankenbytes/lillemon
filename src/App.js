import { Fragment } from 'react';
import React from 'react';
import './App.css';
import Header from "./components/Header.jsx"
import Navbar from './components/Navbar.jsx';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
    <Header></Header>
    <Navbar></Navbar>
    <Main></Main>
    <Footer></Footer>
    <main className="App">
      <h1>LilLemon App under construction</h1>
    </main>
    </Fragment>
  );
}

export default App;
