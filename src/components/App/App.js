import React from 'react';
import './App.css';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import NewsCardList from '../../components/NewsCardList/NewsCardList';

function App() {
  return (
    <div className="page">
      <header className="header">

      </header>
      <main className="main">
        <NewsCardList/>
        <About/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
