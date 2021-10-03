import React from "react";
import { Carousel } from "react-responsive-carousel";
import './slider.scss'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Carousel
    autoPlay={false}
    showStatus={false}
    showThumbs={false}
  >

    <div className='slide1'>
      <div className='slide1-inner'>

        <div className='slide1-img1-container'>
          <img className='slide1-img1' alt="white-card" src="img/white-card.png" />
        </div>
        <div className='slide1-img2-container'>
          <img className='slide1-img2' alt="black-card" src="img/black-card.png" />
        </div>

        <p className='slide1-title'>Лига Банк</p>
        <p className='slide1-subtitle'>Кредиты на любой случай</p>
        <a className='slide1-link' href='##'>Рассчитать кредит</a>
      </div>
    </div>

    <div className='slide2'>
      <img alt="slide2" src="img/slide2-bg.jpg" />
      <p className='slide2-title'>Лига Банк</p>
      <p className='slide2-subtitle'>Ваша уверенность в завтрашнем дне</p>
    </div>

    <div className='slide3'>
      <img alt="slide3" src="img/slide3-bg.jpg" />
      <p className='slide3-title'>Лига Банк</p>
      <p className='slide3-subtitle'>Всегда рядом</p>
      <a className='slide3-link' href='##'>Найти отделение</a>
    </div>
  </Carousel>
);
