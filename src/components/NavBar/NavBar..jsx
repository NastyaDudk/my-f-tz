import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { nanoid } from "nanoid";
import { selectFavoritesIDs } from "../../Redux/selectors";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const location = useLocation();
  const favoriteCount = useSelector(selectFavoritesIDs);

  return (
    <nav className={style.wrapper}>
      <ul className={style.list}>
        {location.pathname !== "/" && (
          <li key={nanoid()} className={style.listItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${style.active} ${style.span}` : style.span
              }
            >
              Back to Home
            </NavLink>
          </li>
        )}

        <li key={nanoid()} className={style.listItem}>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? `${style.active} ${style.span}` : style.span
            }
          >
            Catalog
          </NavLink>
        </li>
        <li key={nanoid()} className={style.listItem}>
          <span className={style.likeCount}>
            {favoriteCount.length ? `+${favoriteCount.length}` : ""}
          </span>
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive ? `${style.active} ${style.span}` : style.span
            }
          >
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
