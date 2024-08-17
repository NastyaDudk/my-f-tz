import style from "./ModalReadMore.module.css";
import icons from "../../../images/sprite.svg";

export const ModalReadMore = ({ camper, onClose }) => {
  const handleOnClose = (event) => {
    if (event.target.classList.contains(style.wrapper)) onClose();
  };

  return (
    <div className={style.wrapper} onClick={handleOnClose}>
      <div className={style.textWrapper}>
        <button type="button" className={style.buttonClose} onClick={onClose}>
          <svg className={style.icon} width="16" height="16">
            <use href={`${icons}#icon-Close`}></use>
          </svg>
        </button>
        <h2 className={style.title}>{camper.name} description</h2>
        <p className={style.description}>{camper.description}</p>
      </div>
    </div>
  );
};
