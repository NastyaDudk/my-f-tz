import style from "./HomePage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperList } from "../../Redux/operation";
import { selectIsLoading, selectShowedVans } from "../../Redux/selectors";
import { PromoImages } from "./PromoImages/PromoImages";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const dispatch = useDispatch();
  const showedVans = useSelector(selectShowedVans);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCamperList(showedVans));
  }, [dispatch, showedVans]);

  return (
    <>
      {!isLoading && (
        <div className={style.wrapper}>
        <Link to="/catalog">
          <button className={style.button}>Choose</button>
        </Link>
        <div className={style.promoContainer}>
          <h2 className={style.titleAboveImages}>Do you need a camper for your travels? Then you are in the right place, press choose!🙂</h2>
          <PromoImages />
        </div>
      </div>
      )}
    </>
  );
};
