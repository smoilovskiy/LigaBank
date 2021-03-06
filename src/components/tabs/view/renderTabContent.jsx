import React from "react";
import '../tabs.scss';


const tabContent = [<div className='tab-container'>
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

  , <div className='tab-container'>
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
  , <div className='tab-container'>
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
  , <div className='tab-container'>
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
]

function RenderTabContent(props) {
  return tabContent[props.activeTab]
}

export default RenderTabContent;