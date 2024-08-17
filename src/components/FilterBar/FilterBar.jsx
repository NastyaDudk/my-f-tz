import style from "./FilterBar.module.css";

import { FilterForm } from "../FilterForm/FilterForm";

export const FilterBar = () => {
  return (
    <div className={style.wrapper}>
      <FilterForm />
    </div>
  );
};
