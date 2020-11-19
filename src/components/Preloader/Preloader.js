import React from 'react';
import './Preloader.css';

function Preloader() {

  return (
    <div className="preloader">
      <div className="preloader__img"/>
      <p className="preloader__text">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
