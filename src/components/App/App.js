import React from 'react';
import './App.css';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import NewsCardList from '../../components/NewsCardList/NewsCardList';
import Header from '../../components/Header/Header';
import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';

function App() {
  return (
    <div className="page">
      <Header/>
      <main className="main">
        <NewsCardList/>
        <About/>
      </main>
      <Footer/>
      <PopupWithForm/>
    </div>
  );
}

export default App;
