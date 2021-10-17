import React, { useState, createRef } from 'react';
import '../calculator.scss';

const CREDIT_COST_INIT = 2000000;

function RenderCreditParams(props) {

  const step2 = 'Шаг 2. Введите параметры кредита';
  const realEstateCost = 'Стоимость недвижимости';
  const carCost = 'Стоимость автомобиля';

  const [creditCost, setCreditCost] = useState(CREDIT_COST_INIT);
  // const [input, setInput] = useState('');


  let inputText = createRef();

  // function handleInput() {
  //   inputText.current.value = creditCost;
  //   console.log(inputText.current.value);
  // }

  function handleCreditCostInput() {
    setCreditCost(+inputText.current.value)
    // console.log(inputText.current.value)

  }

  console.log(creditCost)

  function decreaseCreditCost() {
    setCreditCost(creditCost - 100000)
  }

  function increaseCreditCost() {
    setCreditCost(creditCost + 100000)
  }

  // const [sliderProps, setSliderProps] = useState({
  //   min: 0,
  //   max: 100,
  //   value: 20,
  //   label: 'This is a reusable slider'
  // });
  // const [sliderValue, setSliderValue] = useState(0);

  // const handleSliderChange = e => {
  //   setSliderValue(e.target.value);
  // };

  // const handleMouseUp = e => {
  //    // do something with sliderValue
  // };


  const creditParams = [
    <div className='mortgage-credit-params'>
      <p className='calculator__steps-text'>{step2}</p>
      <p className='credit-params-subtitle'>{realEstateCost}</p>
      <div className='credit-selector-condensed'>
        <img className='minus-img' src='./img/icon/minus.svg' alt='minus-img' onClick={decreaseCreditCost}></img>
        {/* {<p className='credit-cost'>{creditCost.toLocaleString('ru')} рублей</p>} */}
        <div className='credit-cost-container'>
          {/* <input className='credit-cost' value={creditCost.toLocaleString('ru')}
            onInput={e => setCreditCost(e.target.value)} /> */}

          <input className='credit-cost' ref={inputText} value={creditCost} onChange={handleCreditCostInput} />

          <p className='credit-cost-currency'> рублей</p>
        </div>


        <img className='plus-img' src='./img/icon/plus.svg' alt='minus-img' onClick={increaseCreditCost}></img>
      </div>
      <p className='credit-cost-range'>От 1 200 000  до 25 000 000 рублей</p>

      <p className='credit-params-subtitle'>Первоначальный взнос</p>

      <div className='credit-selector-condensed'>

      </div>
      {/* <input
          type="range"
          value={sliderVal}
          {...sliderProps}
          className={`slider ${classes}`}
          id="myRange"
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={() => setMouseState("up")}
        /> */}

      <p className='credit-params-subtitle'>Срок кредитования</p>
      <div className='credit-selector-condensed'>

      </div>
      <div className='our-offer'>
        <div className='our-offer__inner'>
          <p className='our-offer__title'>Наше предложение</p>
          <p className='amount-value'>{creditCost.toLocaleString('ru')} рублей</p>
          <p className='amount-subtitle'>Сумма ипотеки</p>
          <p className='amount-value'>{(creditCost/5).toLocaleString('ru')} рублей</p>
          <p className='amount-subtitle'>Ежемесячный платеж</p>
        </div>
      </div>
    </div>

    ,
    <div className='car-credit-params'>
      <p className='calculator__steps-text'>{step2}</p>
      <p className='credit-params-subtitle'>{carCost}</p>
      <div className='credit-selector-condensed'>
        <img className='minus-img' src='./img/icon/minus.svg' alt='minus-img' onClick={decreaseCreditCost}></img>
        <p className='credit-cost'>{creditCost.toLocaleString('ru')} рублей</p>
        <img className='plus-img' src='./img/icon/plus.svg' alt='minus-img' onClick={increaseCreditCost}></img>
      </div>

      <div className='our-offer'>

      </div>
    </div>


  ];

  return creditParams[props.content]
}

export default RenderCreditParams;