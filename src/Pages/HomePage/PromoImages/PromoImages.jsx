import { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import style from "./PromoImages.module.css";
import { selectIsLoading, selectPromoImages } from "../../../Redux/selectors";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export function PromoImages() {
  const promoImages = useSelector(selectPromoImages);
  const isLoading = useSelector(selectIsLoading);
  const location = useLocation();

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (promoImages) {
      const imagesData = promoImages.map((image) => ({
        original: Object.values(image),
        thumbnail: Object.values(image),
        description: Object.keys(image)[0],
      }));
      setImages(imagesData);
    }
  }, [promoImages]);


  return (
    <>
      {!isLoading && (
        <div className={`${style.sliderContainer} ${location.pathname === "/contacts" ? style.contacts : ""}`}>
          <ImageGallery items={images} />
        </div>
      )}
    </>
  );
}