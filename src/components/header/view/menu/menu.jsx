import { Fragment } from "react"
import './menu.scss'

function ListItem(props) {
  return <li className='menu__item'>{props.value}</li>;
}

function MenuList(props) {
  const menuItems = props.menuItems;
  const listItems = menuItems.map((menuItem) =>

    <ListItem key={menuItem.key} value={menuItem.item} />
  );
  return (
    <ul className='menu__list'>
      {listItems}
    </ul>
  );
}

const menuItems = [
  { item: <a className='menu__item-link' href='##'>Услуги</a>, key: 1 },
  { item: <a className='menu__item-link' href='##'>Рассчитать кредит</a>, key: 2 },
  { item: <a className='menu__item-link' href='##'>Конвертер валют</a>, key: 3 },
  { item: <a className='menu__item-link' href='##'>Контакты</a>, key: 4 },
];

export default function MenuContainer() {
  return (
    <Fragment>
      <MenuList menuItems={menuItems} />
    </Fragment>
  );
};