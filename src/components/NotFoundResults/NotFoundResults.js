import React from 'react';
import './NotFoundResults.css';

function NotFoundResults() {

  return (
    <div className="not-found-results not-found-results_active">
      <div className="not-found-results__icon"/>
      <h2 className="not-found-results__title">Ничего не найдено</h2>
      <p className="not-found-results__text">К сожалению по вашему запросу
        ничего не найдено.</p>
    </div>
  );
}

export default NotFoundResults;
