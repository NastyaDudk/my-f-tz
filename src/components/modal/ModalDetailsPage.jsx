import React, { useState, useEffect } from 'react';
import style from './ModalDetailsPage.module.css';
import { nanoid } from "nanoid";
import icons from "../../images/sprite.svg";
import { CamperFeatures } from "../CamperFeatures/CamperFeatures";
import { CamperReviews } from "../CamperReviews/CamperReviews";
import { BookingComponent } from "../BookingComponent/BookingComponent";
import { Link } from "react-router-dom";

export const ModalDetailsPage = ({ modalIsOpen, closeModal, camper }) => {
  const [isFeatures, setIsFeatures] = useState(true);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    modalIsOpen
      ? document.addEventListener("keydown", handleKeyDown)
      : document.removeEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalIsOpen]);

  const handleKeyDown = (event) => {
    if (event.key === "Escape" || event.keyCode === 27) {
      closeModal();
    }
  };

  const handleCloseModal = (event) => {
    if (event.target.classList.contains(style.backdropWrapper)) closeModal();
  };

  const handleReadMore = () => {
    setShowFullText(true);
  };

  return (
    <div className={style.backdropWrapper} id="backdrop" onClick={handleCloseModal}>
      <div className={style.main}>
        <div className={style.frame}>
          <button type="button" className={style.buttonClose} onClick={closeModal}>
            <svg className={style.icon} width="16" height="16">
              <use href={`${icons}#icon-Close`}></use>
            </svg>
          </button>
          <div className={style.details}>
            <div className={style.titleWrapper}>
              <h2 className={style.headerTwo}>{camper.name}</h2>
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
                      }, 0) / camper.reviews.length} ({camper.reviews.length} Reviews)
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
            <h2 className={style.headerPrice}>€{camper.price.toFixed(2)}</h2>
            <div>
              <ul className={style.imageList}>
                {camper.gallery.map((url) => (
                  <li key={nanoid()} className={style.imageItem}>
                    <img src={url} alt="Camper details" className={style.image} />
                  </li>
                ))}
              </ul>
            </div>

            <p className={style.description}>
              {showFullText ? camper.description : `${camper.description.substring(0, 100)}...`}
            </p>

            {!showFullText && (
              <button type="button" onClick={handleReadMore} className={style.readMoreBtn}>
                ...more
              </button>
            )}

            <div className={style.linkWrapper}>
              <Link onClick={() => setIsFeatures(true)} className={isFeatures ? `${style.link} ${style.active}` : style.link}>
                <h4>Features</h4>
              </Link>
              <Link onClick={() => setIsFeatures(false)} className={!isFeatures ? `${style.link} ${style.active}` : style.link}>
                <h4>Reviews</h4>
              </Link>
            </div>
  
            <div className={style.featureBooking}>
              {isFeatures ? <CamperFeatures camper={camper} /> : <CamperReviews camper={camper} />}
              <BookingComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )};