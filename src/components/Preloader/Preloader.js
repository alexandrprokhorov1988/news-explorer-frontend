import React from 'react';
import './Preloader.css';

function Preloader() {

  return (
    <div className="preloader preloader_active">
      <div className="preloader__img"/>
      <p className="preloader__text">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
