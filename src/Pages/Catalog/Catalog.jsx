import style from "./Catalog.module.css";
import { CamperList } from "../../components/CamperList/CamperList";
import { FilterBar } from "../../components/FilterBar/FilterBar";

export const Catalog = () => {
  return (
    <div className={style.wrapper}>
      <aside>
        <FilterBar />
      </aside>
      <CamperList />
    </div>
  );
};
