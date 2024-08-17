import { nanoid } from "nanoid";
import { Features } from "../CamperListItem/CamperDetails/Features/Features";
import style from "./CamperFeatures.module.css";

export const CamperFeatures = ({ camper }) => {
  return (
    <>
      <div className={style.container}>
        <Features count={true} camper={camper} />
        <h3 className={style.title}>Vehicle details</h3>
        <ul className={style.list}>
          <li key={nanoid()} className={style.listItem}>
            <span className={style.listItemText}>Form</span>
            <span className={style.listItemText}>{camper.form}</span>
          </li>
          <li key={nanoid()} className={style.listItem}>
            <span className={style.listItemText}>Length</span>
            <span className={style.listItemText}>{camper.length}</span>
          </li>
          <li key={nanoid()} className={style.listItem}>
            <span className={style.listItemText}>Width</span>
            <span className={style.listItemText}>{camper.width}</span>
          </li>
          <li key={nanoid()} className={style.listItem}>
            <span className={style.listItemText}>Height</span>
            <span className={style.listItemText}>{camper.height}</span>
          </li>
          <li key={nanoid()} className={style.listItem}>
            <span className={style.listItemText}>Tank</span>
            <span className={style.listItemText}>{camper.tank}</span>
          </li>
          <li key={nanoid()} className={style.listItem}>
            <span className={style.listItemText}>Consumption</span>
            <span className={style.listItemText}>{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
