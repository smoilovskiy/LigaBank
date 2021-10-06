import { Fragment } from "react"
import './main.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from "../slider/slider";
import Tabs from "../tabs/tabs";


function Main() {
  return (
    <Fragment>
      <div className='main'>
        <Slider />
        <Tabs />


      </div>
    </Fragment>
  );
};

export default Main;