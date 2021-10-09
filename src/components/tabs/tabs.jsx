import React, { useState } from 'react';
import { Fragment } from 'react';
import RenderTabContent from './view/renderTabContent';
import './tabs.scss'

const tabsItems = [
  { key: 1, title: 'Вклады', imgUrl: './img/icon/deposits.svg', imgAlt: 'deposits-icon', id: 0 },
  { key: 2, title: 'Кредиты', imgUrl: './img/icon/credits.svg', imgAlt: 'credits-icon', id: 1 },
  { key: 3, title: 'Страхование', imgUrl: './img/icon/insurance.svg', imgAlt: 'insurance-icon', id: 2 },
  { key: 4, title: 'Онлайн-сервисы', imgUrl: './img/icon/online-services.svg', imgAlt: 'onlineServices-icon', id: 3 },
];

function Tabs() {

  const [active, setActive] = useState(tabsItems[0].title);
  const [activeTab, setActiveTab] = useState(0);
  
  const activeTitleBg = { 'background': '#F6F7FF' };

  const activeTitle = tabsItems.map(tabsItem => (

    <div className='tab-select' key={tabsItem.key}
      onClick={() => {setActive(tabsItem.title); setActiveTab(tabsItem.id)}} style={tabsItem.title === active ? activeTitleBg : null}>
      <div className='tab-select__title'>
        
        <span className='tab-select__title-text'> <img className='tab-select__title-img' src={tabsItem.imgUrl} alt={tabsItem.imgAlt} />{tabsItem.title}</span>
      </div>
    </div>
  ));

  return (
    <Fragment>

      <div className='tabs-container'>
        <div className='tabs-selector'>
          {activeTitle}

        </div>

        <RenderTabContent activeTab={activeTab}/>

      </div>
    </Fragment>
  );
}

export default Tabs;