import style from "./CamperListItem.module.css";
import { HeroImage } from "./HeroImage/HeroImage";
import { CamperDetails } from "./CamperDetails/CamperDetails";
import { useState } from "react";
import { ModalDetailsPage } from "../modal/ModalDetailsPage";
import { useLocation } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";

export const CamperListItem = ({ camper }) => {
  const location = useLocation();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
<>
  <div className={style.wrapper}>
    <div className={style.contentWrapper}>
      <HeroImage camper={camper} />
      <CamperDetails camper={camper} />
    </div>
    <button
      type="button"
      onClick={toggleModal}
      className={
        location.pathname === "/favorite"
          ? `${style.showMore} ${style.favoritesShowMore}`
          : style.showMore
      }>
      Show more
    </button>
    {modalIsOpen && (
      <RemoveScroll>
        <ModalDetailsPage
          camper={camper}
          closeModal={toggleModal}
          modalIsOpen={modalIsOpen}
        />
      </RemoveScroll>
    )}
  </div>
</>
  );
};
