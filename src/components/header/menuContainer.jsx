import { Fragment } from "react"


const styles = {
  div: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // width: '1366px',
    height: '90px',
    // margin: '0 auto',
    border: '1px solid red',
  },
  // input: {
  //   marginRight: '1rem'
  // }
}

const MenuContainer = () => {
  return (
    <Fragment>
      <div style={styles.div}>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default MenuContainer;