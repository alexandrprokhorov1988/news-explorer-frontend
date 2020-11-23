import React from 'react';
import About from '../../components/About/About';
import NewsCardList from '../../components/NewsCardList/NewsCardList';

function Main(
  {
    loggedIn,
    isLoading,
    cards,
    isFound,
    category,
    onCardAdd,
    onCardDelete
  }) {

  return (
    <>
      <NewsCardList
        loggedIn={loggedIn}
        isLoading={isLoading}
        cards={cards}
        isFound={isFound}
        category={category}
        onCardAdd={onCardAdd}
        onCardDelete={onCardDelete}
      />
      <About/>
    </>
  );
}

export default Main;
