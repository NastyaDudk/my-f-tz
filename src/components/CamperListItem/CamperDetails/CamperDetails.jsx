import style from "./CamperDetails.module.css";
import icons from "../../../images/sprite.svg";
import { Features } from "./Features/Features";
import { toggleFavorite } from "../../../Redux/camperSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectFavoritesIDs } from "../../../Redux/selectors";
import { Link } from "react-router-dom";

export const CamperDetails = ({ camper }) => {
  const dispatch = useDispatch();
  const favoritesIDs = useSelector(selectFavoritesIDs);
  

  useEffect(() => {
    if (!favoritesIDs.length) return;

    for (let i = 0; i < favoritesIDs.length; i++)
      document
        .getElementById(`favorite${favoritesIDs[i]}`)
        ?.classList?.add(style.active);
  }, [favoritesIDs, favoritesIDs.length]);

  const handleFavorite = (event) => {
    const _id = event.currentTarget.dataset.camperid;
    dispatch(toggleFavorite(_id));
    event.currentTarget.classList.toggle(style.active);
  };

  return (
    <div className={style.details}>
      <div className={style.titleWrapper}>
        <h2 className={style.headerTwo}>{camper.name}</h2>
        <h2 className={style.headerPrice}>€{camper.price.toFixed(2)}</h2>
        <button
          id={`favorite${camper._id}`}
          type="button"
          data-camperid={camper._id}
          className={style.favoriteButton}
          onClick={handleFavorite}
        >
          <svg className={style.svg} width="24" height="24">
            <use href={`${icons}#icon-heart`}></use>
          </svg>
        </button>
      </div>
      <div className={style.ratings}>
        <svg className={style.svgStar} width="16" height="16">
          <use href={`${icons}#icon-RatingStar`}></use>
        </svg>
        <p className={style.reviewRank}>
          {camper.reviews && camper.reviews.length > 0 ? (
            <>
              <Link to={`/reviews/#${camper._id}`}>
                {camper.reviews.reduce((acc, review) => {
                  return acc + review.reviewer_rating;
                }, 0) / camper.reviews.length}
                ({camper.reviews.length} Reviews)
              </Link>
            </>
          ) : (
            "No Reviews"
          )}
        </p>
        <svg className={style.svgPointer} width="16" height="16">
          <use href={`${icons}#icon-map-pin`}></use>
        </svg>
        <span className={style.location}>
          {camper.location.split(",").reverse().join(", ")}
        </span>
      </div>
      <p className={style.description}>{camper.description}</p>
      <Features camper={camper} />
    </div>
  );
};
