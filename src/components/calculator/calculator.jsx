import React, { useState } from 'react';
import { Fragment } from "react";
import RenderCreditParams from './view/renderCreditParams';
// import RefDemo from './refdemo';
import './calculator.scss';

function Calculator() {

  const step1 = 'Шаг 1. Цель кредита';

  const mortgageCredit = 'Ипотечное кредитование';
  const carCredit = 'Автомобильное кредитование';
  const creditTargetTitle = 'Выберите цель кредита';

  const [expanded, setExpanded] = useState(false);
  const [creditType, setCreditType] = useState(creditTargetTitle);

  function handlerExpandMenu() {
    setExpanded(!expanded)
  }

  function handlerMortgageCredit() {
    setExpanded(!expanded);
    setCreditType(mortgageCredit);
  }

  function handlerCarCredit() {
    setExpanded(!expanded)
    setCreditType(carCredit);
  }

  const creditSelect = [
    <div className='credit-selector-condensed'>
      <p className='credit-selector__title'>{creditType}</p>
      <img className='credit-selector__arrow'
        src='./img/icon/arrow-down.svg'
        alt='credit-selector-arrow'
        onClick={handlerExpandMenu} >
      </img>
    </div>,
    <div className='credit-selector-expanded-container'>
      <div className='credit-selector-expanded'>
        <p className='credit-selector__title'>{creditType}</p>
        <img className='credit-selector__arrow'
          src='./img/icon/arrow-up.svg'
          alt='credit-selector-arrow'
          onClick={handlerExpandMenu} >
        </img>
      </div>
      <div className='mortgage-credit-lending' onClick={handlerMortgageCredit}>
        <p className='credit-selector__title--expanded'>{mortgageCredit}</p>
      </div>
      <div className='car-credit-lending' onClick={handlerCarCredit}>
        <p className='credit-selector__title--expanded' >{carCredit}</p>
      </div>
    </div>
  ];


  return (
    <Fragment>
      <div className='calculator__container'>
        <h3 className='calculator__title'>Кредитный калькулятор</h3>
        <p className='calculator__steps-text'>{step1}</p>
        {expanded === false ? creditSelect[0] : creditSelect[1]}
        {creditType === creditTargetTitle ? null : 
        creditType === mortgageCredit ? 
        <RenderCreditParams content={0}/> :
        <RenderCreditParams content={1}/>}
        
      </div>
{/* <RefDemo /> */}
    </Fragment>
  );
};

export default Calculator