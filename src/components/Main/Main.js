import React from 'react';
import About from '../../components/About/About';
import NewsCardList from '../../components/NewsCardList/NewsCardList';

function Main({loggedIn, isLoading, isFoundArticles}) {

  return (
   <main className="main">
      <NewsCardList
        loggedIn={loggedIn}
        isLoading={isLoading}
        isFoundArticles={isFoundArticles}
      />
      <About/>
   </main>
  );
}

export default Main;
