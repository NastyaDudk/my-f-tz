import { nanoid } from "nanoid";
import style from "./Features.module.css";
import icons from "../../../../images/sprite.svg";


export const Features = ({ count, camper }) => {
  const detailsList = Object.entries(camper.details).filter((d) => d[1]);
  detailsList.unshift(["adults", camper.adults]);

  function findIcon(detailName) {
    switch (detailName) {
      case "adults":
        return `${icons}#icon-Users`;
      case "airConditioner":
        return `${icons}#icon-AC`;
      case "bathroom":
        return `${icons}#icon-bathroom`;
      case "kitchen":
        return `${icons}#icon-kitchen`;
      case "beds":
        return `${icons}#icon-bad`;
      case "TV":
        return `${icons}#icon-tv`;
      case "CD":
        return `${icons}#icon-cd`;
      case "radio":
        return `${icons}#icon-radio`;
      case "shower":
        return `${icons}#icon-shower`;
      case "toilet":
        return `${icons}#icon-toilet`;
      case "freezer":
        return `${icons}#icon-freezer`;
      case "hob":
        return `${icons}#icon-hob`;
      case "microwave":
        return `${icons}#icon-microwave`;
    }
  }

  return (
    <ul>
      {!count ? (
        <div className={style.wrapper}>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svg} width="20" height="20">
              <use href={`${icons}#icon-Users`}></use>
            </svg>
            <p className={style.featureName}>{camper.adults} adults</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgGears} width="20" height="20">
              <use href={`${icons}#icon-gears`}></use>
            </svg>
            <p className={style.featureName}>{camper.transmission}</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svg} width="20" height="20">
              <use href={`${icons}#icon-fuel`}></use>
            </svg>
            <p className={style.featureName}>{camper.engine}</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgForkKnife} width="20" height="20">
              <use href={`${icons}#icon-forkKnife`}></use>
            </svg>
            <p className={style.featureName}>Kitchen</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svgBad} width="20" height="20">
              <use href={`${icons}#icon-bad`}></use>
            </svg>
            <p className={style.featureName}>{camper.details.beds} beds</p>
          </li>
          <li key={nanoid()} className={style.item}>
            <svg className={style.svg} width="20" height="20">
              <use href={`${icons}#icon-AC`}></use>
            </svg>
            <p className={style.featureName}>AC</p>
          </li>{" "}
        </div>
      ) : (
        <div className={style.wrapper}>
          {detailsList.map((item) => {
            if (item[0] !== "gas" && item[0] !== "water") {
              return (
                <li key={nanoid()} className={style.item}>
                  <svg className={style.svg} width="20" height="20">
                    <use href={`${findIcon(item[0])}`}></use>
                  </svg>
                  <p className={style.featureName}>{`${item[1]} ${item[0]}`}</p>
                </li>
              );
            }
          })}
        </div>
      )}
    </ul>
  );
};
