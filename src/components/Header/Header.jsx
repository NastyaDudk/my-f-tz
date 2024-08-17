import style from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar.";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <Logo />
      </div>
      <div className={style.navBarContainer}>
        <NavBar />
      </div>
    </div>
  );
};
