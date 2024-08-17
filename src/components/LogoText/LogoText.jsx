import { useEffect, useRef } from "react";
import style from "./LogoText.module.css";

export const LogoText = () => {
  const logoText = useRef(null);

  useEffect(() => {
    const letters = logoText.current.querySelectorAll('span');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add(style.moved);
      }, index * 250);
    });

  }, []);

  return (
    <h2 ref={logoText} className={style.logoText}>
      DREAM<span className={style.span}>CAMPER</span>
    </h2>
  );
};
