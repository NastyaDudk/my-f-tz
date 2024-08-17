import style from "./Favorites.module.css";
import { CamperList } from "../../components/CamperList/CamperList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters } from "../../Redux/camperSlice";
import { selectFilteredCampers } from "../../Redux/selectors";
import { Navigate } from "react-router-dom";

export const Favorites = () => {
  const dispatch = useDispatch();
  const camperList = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  if (!camperList) {
    return <Navigate to="/" />;
  }

  return (
    <div className={style.wrapper}>
      <CamperList />
    </div>
  );
};
