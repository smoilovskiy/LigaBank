import { Fragment } from "react"
import LogoContainer from "./view/logo/logo"
import MenuList from "./view/menu/menu"
import CallUs from "./view/call-us/call-us"
import './footer.scss'

const menuItems = [
  { item: 'Услуги', key: 1, path: '##' },
  { item: 'Рассчитать кредит', key: 2, path: '##' },
  { item: 'Конвертер валют', key: 3, path: '##' },
  { item: 'Контакты', key: 4, path: '##' },
];

const callUs = [
  { iconUrl: './img/icon/cell-phone.svg', phoneNumber: '*0904', text: 'Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2' },
  { iconUrl: './img/icon/phone.svg', phoneNumber: '8 800 111 22 33', text: 'Бесплатный для всех городов России' }
];

function Footer() {
  return (
    <Fragment>
      <div className='footer'>
        <div className='footer__inner'>
          <LogoContainer />
          <MenuList menuItems={menuItems} />
          <CallUs callUs={callUs[0]} />
          <CallUs callUs={callUs[1]} />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;