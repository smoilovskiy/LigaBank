import { Fragment } from "react"


function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>

    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4];


const MenuContainer = () => {
  return (
    <Fragment>
      <NumberList numbers={numbers} />
    </Fragment>
  );
};

export default MenuContainer;