import React, { Fragment } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';
import MapRender from '../map/map';




function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <MapRender />
      <Footer />


    </Fragment>
  );
};

export default App;
