import { Fragment } from "react"


const styles = {
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1366px',
    height: '90px',
    margin: '0 auto',
  },
  // input: {
  //   marginRight: '1rem'
  // }
}

const Header = () => {
  return (
    <Fragment>
      <div style={styles.div}>
        <h1>Div1</h1>
        <h1>Div2</h1>
        <h1>Div3</h1>
        <h1>Div4</h1>

      </div>
    </Fragment>
  );
};

export default Header;