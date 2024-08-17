import { useDispatch, useSelector } from "react-redux";
import { CamperListItem } from "../CamperListItem/CamperListItem";
import style from "./CamperList.module.css";
import {
  selectCampersCount,
  selectIsLoading,
  selectFavoritesIDs,
  selectFilteredCampers,
} from "../../Redux/selectors";
import { fetchCamperList } from "../../Redux/operation";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

export const CamperList = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const camperList = useSelector(selectFilteredCampers);
  const campersCount = useSelector(selectCampersCount);
  const favoriteCampers = useSelector(selectFavoritesIDs);
  const [initialCampersToShow, setInitialCampersToShow] = useState(4);

  useEffect(() => {
    dispatch(fetchCamperList(initialCampersToShow));
  }, []);

  if (!camperList) {
    return <Navigate to="/" />;
  }

  function handleLoadMore() {
    const newCampersToShow = initialCampersToShow + 4;
    setInitialCampersToShow(newCampersToShow);
    dispatch(fetchCamperList(newCampersToShow));
  }

  return (
    <>
      {location.pathname === "/catalog" && (
        <div className={style.wrapper} id="camperList">
          {camperList.length ? (
            <ul>
              {selectIsLoading &&
                camperList?.slice(0, initialCampersToShow).map((camper) => {
                  return (
                    <li key={camper._id} className={style.camperItem}>
                      
                      <CamperListItem camper={camper} />
                    </li>
                  );
                })}
            </ul>
          ) : (
            <div className={style.infoWrapper}>
              <img
                src="/src/images/dummyImage.jpg"
                alt="No favorite campers image"
                className={style.dummy}
              />
              <p className={style.info}>
                There are no any campers, matches to your query...
              </p>
            </div>
          )}

          {campersCount > initialCampersToShow && (
            <button
              type="button"
              onClick={handleLoadMore}
              className={style.loadMoreBtn}
            >
              Load more
            </button>
          )}
        </div>
      )}

      {location.pathname === "/favorite" && (
        <div className={style.wrapper}>
          {favoriteCampers.length ? (
            <ul>
              {selectIsLoading &&
                camperList
                  ?.filter((camper) => favoriteCampers.includes(camper._id))
                  .map((camper) => (
                    <li key={camper._id}>
                      <CamperListItem camper={camper} />
                    </li>
                  ))}
            </ul>
          ) : (
            <div className={style.infoWrapper}>
              <img
                src="/src/images/dummyImage.jpg"
                alt="No favorite campers image"
                className={style.dummy}
              />
              <p className={style.info}>
                There are no any favorite campers yet...
              </p>
              <Link to="/catalog" className={style.link}>
                Try to choose one!!!
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};
