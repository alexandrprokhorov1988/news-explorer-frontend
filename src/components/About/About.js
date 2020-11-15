import React from 'react';
import './About.css';
import photoMax from '../../images/photo-about-1440.png';
import photoMid from '../../images/photo-about-768.png';
import photoMin from '../../images/photo-about-320.png';

function About() {

  return (
    <section className="about">
      <picture>
        <source media="(min-width: 768px)" srcSet={photoMax}/>
        <source media="(min-width: 425px)" srcSet={photoMid}/>
        <img className="about__photo" src={photoMin} alt="Фото"/>
      </picture>
      <div className="about__text-container">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__paragraf">Привет! Меня зовут Александр Прохоров. Я увлекаюсь веб-разработкой.</p>
        <p className="about__paragraf">
          Во время обучения в Яндекс.Практикум по специальности Веб-разработчик изучал HTML, верстку по БЭМ, JS и
          MERN. Данный проект написан на Mongo, Express, React, Node.
          </p>
      </div>
    </section>
  );
}

export default About;
