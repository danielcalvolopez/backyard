import classes from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src="/backyard-logo.svg" />
      <RxHamburgerMenu className={classes.burger} size={30} />
    </div>
  );
};

export default Header;
