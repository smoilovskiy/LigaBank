import React, { useState } from 'react';
import { Fragment } from 'react';
import './tabs.scss'

const deposits = <div className='tab-container'>
    deposits-tab
    <img className='tab-img' src='./img/piggybank.jpg' alt='piggybank-img' />
  </div>

const credits = <div className='tab-container'>
  credits-tab
  <img className='tab-img' src='./img/car.jpg' alt='car-img' />
</div>
const insurance = <div className='tab-container'>
  insurance-tab
  <img className='tab-img' src='./img/lock.jpg' alt='lock-img' />
</div>
const onlineServices = <div className='tab-container'>
  onlineServices-tab
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
        <img src={tabsItem.imgUrl} alt={tabsItem.imgAlt} /> {tabsItem.title}</div>
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