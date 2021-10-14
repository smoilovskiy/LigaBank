import React, { useState } from 'react';
import { Fragment } from "react"
import './calculator.scss'


function Calculator() {

  const step1 = 'Шаг 1. Цель кредита';
  const step2 = 'Шаг 2. Введите параметры кредита';
  const realEstateCost = 'Стоимость недвижимости';
  const carCost = 'Стоимость автомобиля';

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
      <div className='mortgage-credit-lending'>
        <p className='credit-selector__title--expanded' onClick={handlerMortgageCredit}>{mortgageCredit}</p>
      </div>
      <div className='car-credit-lending'>
        <p className='credit-selector__title--expanded' onClick={handlerCarCredit}>{carCredit}</p>
      </div>
    </div>
  ];

  const creditParams = [
    <div className='mortgage-credit-params'>
      <p className='calculator__steps-text'>{step2}</p>
      <p className='credit-params-subtitle'>{realEstateCost}</p>
      <div className='credit-selector-condensed'>

      </div>

    </div>,
    <div className='car-credit-params'>
      <p className='calculator__steps-text'>{step2}</p>
      <p className='credit-params-subtitle'>{carCost}</p>
      <div className='credit-selector-condensed'>

      </div>
    </div>
  ];


  return (
    <Fragment>
      <div className='calculator__container'>
        <h3 className='calculator__title'>Кредитный калькулятор</h3>
        <p className='calculator__steps-text'>{step1}</p>
        {expanded === false ? creditSelect[0] : creditSelect[1]}
        {creditType === creditTargetTitle ? null : creditType === mortgageCredit ? creditParams[0] : creditParams[1]}

      </div>

    </Fragment>
  );
};

export default Calculator