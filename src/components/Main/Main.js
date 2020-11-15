import React from 'react';
import About from '../../components/About/About';
import NewsCardList from '../../components/NewsCardList/NewsCardList';

function Main({loggedIn}) {

  return (
   <main className="main">
      <NewsCardList
        loggedIn={loggedIn}
      />
      <About/>
   </main>
  );
}

export default Main;
