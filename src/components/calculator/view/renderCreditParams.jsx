import React, { useState, createRef } from 'react';
import '../calculator.scss';

const CREDIT_COST_INIT = 2000000;
const LOAN_TERMS_VALUE_MIN = 5;
const LOAN_TERMS_VALUE_MAX = 30;
const INITIAL_FEE_VALUE_MIN_PERCENT = 10;

function RenderCreditParams(props) {

  const step2 = 'Шаг 2. Введите параметры кредита';
  const realEstateCost = 'Стоимость недвижимости';
  const carCost = 'Стоимость автомобиля';
  const [creditCost, setCreditCost] = useState(CREDIT_COST_INIT);
  const [active, setApplyFormActive] = useState({ display: "none" });

  const [initialFeeValue, setInitialFeeValue] = useState(creditCost / 10);
  const [loanTermsValue, setLoanTermsValue] = useState(LOAN_TERMS_VALUE_MIN);

  const inputCreditCost = createRef();
  const inputInitialFee = createRef();
  const inputLoanTerms = createRef();

  function handleCreditCostInput() {
    setCreditCost(+inputCreditCost.current.value)
  }

  function handleInitialFeeChange() {
    setInitialFeeValue(+inputInitialFee.current.value)
  }

  function handleLoanTermsChange() {
    setLoanTermsValue(+inputLoanTerms.current.value)
  } 

  function decreaseCreditCost() {
    setCreditCost(creditCost - 100000)
  }

  function increaseCreditCost() {
    setCreditCost(creditCost + 100000)
  }

  function applyFormActive() {
    setApplyFormActive({ display: "block" })
  }

  // function applyForm() {
  //   alert([document.forms["apply-form"].elements["initial-fee"].value,
  //   document.forms["apply-form"].elements["order-number"].value,
  //   document.forms["apply-form"].elements["credit-target"].value])


  //   return false
  // }

  // let temp = creditCost * initialFeeValue / 100

  const creditParams = [
    <div className='mortgage-credit-params'>
      <p className='calculator__steps-text'>{step2}</p>

      <p className='credit-params-subtitle'>{realEstateCost}</p>
      <div className='credit-selector-condensed'>
        <img className='minus-img' src='./img/icon/minus.svg' alt='minus-img' onClick={decreaseCreditCost}></img>
        <div className='credit-cost-container'>
          <input className='credit-cost' ref={inputCreditCost} value={creditCost} onChange={handleCreditCostInput} />
          <p className='credit-cost-currency'> рублей</p>
        </div>
        <img className='plus-img' src='./img/icon/plus.svg' alt='minus-img' onClick={increaseCreditCost}></img>
      </div>
      <p className='credit-cost-range'>От 1 200 000  до 25 000 000 рублей</p>
      <p className='credit-params-subtitle'>Первоначальный взнос</p>
      <div className='initial-fee-container'>
        <div className='credit-cost-container'>
          <input className='credit-cost'
            ref={inputInitialFee}
            value={initialFeeValue}
            // onChange={handleInitialFeeChange}
            onChange={({ target: { value: inputInitialFee } }) => {
              setInitialFeeValue(inputInitialFee);
            }}
          />

          <p className='credit-cost-currency'> рублей</p>
        </div>
      </div>

      <div className='range-slider-container'>
        <input
          type="range"
          ref={inputInitialFee}
          className="range-slider"

          min={creditCost / INITIAL_FEE_VALUE_MIN_PERCENT}
          step={creditCost / 20}
          max={creditCost}
          value={initialFeeValue}
          onChange={handleInitialFeeChange}
        />
        <span className='range-slider-marker-min'>{INITIAL_FEE_VALUE_MIN_PERCENT} %</span>
      </div>

      <p className='credit-params-subtitle'>Срок кредитования</p>

      <div className='initial-fee-container'>
        <div className='credit-cost-container'>
          <input
            className='loan-terms'
            ref={inputLoanTerms}
            value={loanTermsValue}
            onChange={({ target: { value: inputLoanTerms } }) => {
              setLoanTermsValue(inputLoanTerms);
            }}
          />

          <p className='loan-terms-years'> лет</p>
        </div>
      </div>

      <div className='range-slider-container'>
        <input
          ref={inputLoanTerms}
          type="range"
          className="range-slider"
          min={LOAN_TERMS_VALUE_MIN}
          max={LOAN_TERMS_VALUE_MAX}
          value={loanTermsValue}
          onChange={handleLoanTermsChange}
        />
        <span className='range-slider-marker-min'>{LOAN_TERMS_VALUE_MIN} лет</span>
        <span className='range-slider-marker-max'>{LOAN_TERMS_VALUE_MAX} лет</span>
      </div>

      <div className='chekbox-container'>
        <input
          type="checkbox"
          className="credit-params-checkbox"
        // value={credit}
        // onChange={changeCallback}
        />
        <p className="checkbox-container-text">Использовать материнский капитал</p>
      </div>

      <div className='our-offer'>
        <div className='our-offer__inner'>
          <div className='our-offer__inner-left'>
            <p className='our-offer__title'>Наше предложение</p>
            <p className='amount-value'>{creditCost.toLocaleString('ru')} рублей</p>
            <p className='amount-subtitle'>Сумма ипотеки</p>
            <p className='amount-value'>{(creditCost / 5).toLocaleString('ru')} рублей</p>
            <p className='amount-subtitle'>Ежемесячный платеж</p>
          </div>

          <div className='our-offer__inner-right'>
            <p className='amount-value'>{initialFeeValue} %</p>
            <p className='amount-subtitle'>Процентная ставка</p>
            <p className='amount-value'>{(creditCost / 40).toLocaleString('ru')} рублей</p>
            <p className='amount-subtitle'>Необходимый доход</p>
          </div>

          <a className='our-offer__link-bttn' href='##' onClick={applyFormActive}>Оформить заявку</a>

        </div>
      </div>
      <div className='apply-form-container' style={active}>

        <div className='apply-form__inner'>
          <div className='apply-form__title-container'>
            <p className='apply-form__title'>Шаг 3. Оформление заявки</p>
          </div>
          <form id='apply-form'>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Номер заявки</p>
              <label className='apply-form__data-value'>{creditCost}</label>
              <input type="hidden" name='order-number' value={creditCost / 1000} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Цель кредита</p>
              <label className='apply-form__data-value'>{creditCost}</label>
              <input type="hidden" name='credit-target' value={creditCost / 56} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Стоимость недвижимости</p>
              <label className='apply-form__data-value'>{creditCost} рублей</label>
              <input type="hidden" name='credit-cost' value={creditCost} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Первоначальный взнос</p>
              <label className='apply-form__data-value'>{initialFeeValue} рублей</label>
              <input type="hidden" name='initial-fee' value={initialFeeValue} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Срок кредитования</p>
              <label className='apply-form__data-value'>{loanTermsValue} лет</label>
              <input type="hidden" name='loan-terms' value={loanTermsValue} />
            </div>

            <input className='apply-form__customer-name' type="text" name='customer-name' placeholder='ФИО' />
            <div className='apply-form__customer-contacts'>
              <input className='apply-form__customer-phone' type="tel" name='customer-phone' placeholder='Телефон' />
              <input className='apply-form__customer-email' type="mailto" name='customer-email' placeholder='E-mail' />
            </div>

            <button type='submit' className='apply-form__submit-button'>Отправить</button>
          </form>
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

export default RenderCreditParams
