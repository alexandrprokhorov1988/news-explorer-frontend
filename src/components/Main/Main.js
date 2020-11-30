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
    onCardDelete,
    count,
    onShowMore,
    onSignIn,
    searchErr,
    isLoadingAdd,
  }) {

  return (
    <>
      <NewsCardList
        loggedIn={loggedIn}
        isLoading={isLoading}
        isLoadingAdd={isLoadingAdd}
        cards={cards}
        isFound={isFound}
        category={category}
        onCardAdd={onCardAdd}
        onCardDelete={onCardDelete}
        count={count}
        onShowMore={onShowMore}
        onSignIn={onSignIn}
        searchErr={searchErr}
      />
      <About/>
    </>
  );
}

export default Main;
