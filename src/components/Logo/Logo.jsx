import { Link } from "react-router-dom";
import logo from "../../images/camper.svg";
import style from "./Logo.module.css";
import { LogoText } from "../LogoText/LogoText";

export const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Link to="/" className={`${style.link} ${style.show}`}>
        <div className={style.iconWrapper}>
          <img src={logo} alt="Logo of the company" className={style.logo} />
        </div>
      </Link>
      <Link to="/catalog">
        <LogoText />
      </Link>
    </div>
  );
};
