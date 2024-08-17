import { nanoid } from "nanoid";
import style from "./CamperReviews.module.css";
import icons from "../../images/sprite.svg";
import { useLocation } from "react-router-dom";

export const CamperReviews = ({ camper }) => {
  const location = useLocation();
  function rate(value) {
    let ratingItems = [];
    for (let i = 1; i <= 5; i++) {
      ratingItems.push(
        <li key={nanoid()} className={style.ratingListItem}>
          <svg
            width="16"
            height="16"
            className={
              i <= value ? `${style.rating} ${style.active}` : style.rating
            }
          >
            <use href={`${icons}#icon-RatingStar`}></use>
          </svg>
        </li>
      );
    }
    return <ul className={style.ratingList}>{ratingItems}</ul>;
  }

  return (
    <div
      className={
        location.pathname.startsWith("/reviews")
          ? `${style.wrapper} ${style.reviews}`
          : style.wrapper
      }
    >
      <ul>
        {camper.reviews.map((rev) => (
          <li key={nanoid()} className={style.headerBlock}>
            <div className={style.reviewerWrapper}>
              <span className={style.symbol}>{rev.reviewer_name[0]}</span>
              <div className={style.titleWrapper}>
                <h3 className={style.title}>{rev.reviewer_name}</h3>
                {rate(rev.reviewer_rating)}
              </div>
            </div>
            <p className={style.review}>{rev.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
