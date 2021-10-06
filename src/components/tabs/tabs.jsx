import React, { useState } from 'react';
import { Fragment } from 'react';
import './tabs.scss'

const deposits = <div className='tab-container'>
  <p className='tab__text-big line1'>Вклады Лига Банка – это выгодная</p>
  <p className='tab__text-big line2'>инвестиция в свое будущее</p>
  <img className='checkmark-icon checkmark1' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line3'>Проценты по вкладам до 7%</p>
  <img className='checkmark-icon checkmark2' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line4'>Разнообразные условия</p>
  <img className='checkmark-icon checkmark3' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line5'>Возможность ежемесячной капитализации</p>
  <p className='tab__text-small line6'>или вывод процентов на банковскую карту</p>
  <a className='tab__link-bttn' href='##'>Узнать подробнее</a>

  <img className='tab-img' src='./img/piggybank.jpg' alt='piggybank-img' />
</div>

const credits = <div className='tab-container'>
  <p className='tab__text-big line1'>Лига Банк выдает кредиты под</p>
  <p className='tab__text-big line2'>любые цели</p>
  <img className='checkmark-icon checkmark1' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line3'>Ипотечный кредит</p>
  <img className='checkmark-icon checkmark2' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line4'>Автокредит</p>
  <img className='checkmark-icon checkmark3' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line5'>Потребительский кредит</p>
  
  <p className='tab__text-small line7'>Рассчитайте ежемесячный платеж</p>
  <p className='tab__text-small line8'>и ставку по кредиту воспользовавшись</p>
  <p className='tab__text-small line9'>нашим</p>
  <a className='tab__link' href='##'>кредитным калькулятором</a>
  <img className='tab-img' src='./img/car.jpg' alt='car-img' />
</div>
const insurance = <div className='tab-container'>
  <p className='tab__text-big line1'>Лига Страхование — застрахуем все</p>
  <p className='tab__text-big line2'>что захотите</p>
  <img className='checkmark-icon checkmark1' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line3'>Автомобильное страхование</p>
  <img className='checkmark-icon checkmark2' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line4'>Страхование жизни и здоровья</p>
  <img className='checkmark-icon checkmark3' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line5'>Страхование недвижимости</p>
  <a className='tab__link-bttn' href='##'>Узнать подробнее</a>
  <img className='tab-img' src='./img/lock.jpg' alt='lock-img' />
</div>
const onlineServices = <div className='tab-container'>
  <p className='tab__text-big line1'>Лига Банк — это огромное количество</p>
  <p className='tab__text-big line2'>онлайн-сервисов для вашего удобства</p>
  <img className='checkmark-icon checkmark1' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line3'>Мобильный банк,</p>
  <p className='tab__text-small line3-1'>который всегда под рукой</p>
  <img className='checkmark-icon checkmark3' src='./img/icon/checkmark.svg' alt='checkmark-icon' />
  <p className='tab__text-small line5'>Приложение Лига-проездной позволит</p>
  <p className='tab__text-small line6'>вам оплачивать билеты по всему миру</p>
  <a className='tab__link-bttn' href='##'>Узнать подробнее</a>
  <img className='tab-img' src='./img/phone.jpg' alt='phone-img' />
</div>


const tabsItems = [
  { key: 1, title: 'Вклады', imgUrl: './img/icon/deposits.svg', imgAlt: 'deposits-icon', content: deposits },
  { key: 2, title: 'Кредиты', imgUrl: './img/icon/credits.svg', imgAlt: 'credits-icon', content: credits },
  { key: 3, title: 'Страхование', imgUrl: './img/icon/insurance.svg', imgAlt: 'insurance-icon', content: insurance },
  { key: 4, title: 'Онлайн-сервисы', imgUrl: './img/icon/online-services.svg', imgAlt: 'onlineServices-icon', content: onlineServices },
];


function Tabs() {
  const [active, setActive] = useState(tabsItems[0].title);
  const activeTitleBg = { 'background': '#F6F7FF' }

  const activeTitle = tabsItems.map(tabsItem => (
    <div className='tab-select' key={tabsItem.key} onClick={() => setActive(tabsItem.title)} style={tabsItem.title === active ? activeTitleBg : null}>
      <div className='tab-select__title'>
        <img className='tab-select__title-img' src={tabsItem.imgUrl} alt={tabsItem.imgAlt} /> 
        <span className='tab-select__title-text'>{tabsItem.title}</span></div>
    </div>
  ))

  return (
    <Fragment>
      <div className='tabs-container'>
        <div className='tabs-selector'>
          {activeTitle}
        </div>

        {tabsItems.find(tab => tab.title === active).content}

      </div>
    </Fragment>
  );
}
// Usage
export default Tabs;