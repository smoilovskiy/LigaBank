import { Fragment } from "react"
import './main.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from "../slider/slider";
import Tabs from "../tabs/tabs";
import Calculator from "../calculator/calculator";




function Main() {
  return (
    <Fragment>
      <div className='main'>
        <Slider />
        <Tabs />
        <Calculator />

      </div>
    </Fragment>
  );
};

export default Main;