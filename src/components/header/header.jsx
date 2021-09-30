import { Fragment } from "react"
import LogoContainer from "../logoContainer/logoContainer"
import MenuContainer from "../menuContainer/menuContainer"
import UserAuthContainer from "../userAuthContainer/userAuthContainer"


const styles = {
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1366px',
    height: '90px',
    margin: '0 auto',
    border: '1px solid red',
  },
  // input: {
  //   marginRight: '1rem'
  // }
}

const Header = () => {
  return (
    <Fragment>
      <div style={styles.div}>
        <LogoContainer />
        <MenuContainer />
        <UserAuthContainer />

      </div>
    </Fragment>
  );
};

export default Header;