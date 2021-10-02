import React from "react";
import { Carousel } from "react-responsive-carousel";
import './slider.scss'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Carousel autoPlay>
    <div className='slide1'>
      <img alt="slide1" src="" />
    </div>
    <div className='slide2'>
      <img alt="slide2" src="img/slide2-bg.jpg" />
    </div>
    <div className='slide3'>
      <img alt="slide3" src="img/slide3-bg.jpg" />
    </div>
  </Carousel>
);
