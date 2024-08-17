import { useLocation } from "react-router-dom";
import style from "./HeroImage.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const HeroImage = ({ camper }) => {
  const location = useLocation();
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    if (galleryOpen) {
      document.body.classList.add(style.noScroll);
    } else {
      document.body.classList.remove(style.noScroll);
    }
    return () => {
      document.body.classList.remove(style.noScroll);
    };
  }, [galleryOpen]);

  const styleCreator = (location) => {
    if (location.startsWith("/catalog")) return `${style.image}`;
    if (location.startsWith("/favorite"))
      return `${style.image} ${style.favorite}`;
    if (location.startsWith("/reviews"))
      return `${style.image} ${style.reviews}`;
  };

  return (
    <>
      <img
        src={camper.gallery[0]}
        alt="Photo of the camper"
        className={styleCreator(location.pathname)}
        onClick={() => setGalleryOpen(true)}
      />
      {galleryOpen &&
        ReactDOM.createPortal(
          <Lightbox
            styles={{
              container: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
            }}
            open={galleryOpen}
            close={() => setGalleryOpen(false)}
            slides={camper.gallery.map((url) => ({ src: url }))}
          />,
          document.getElementById("lightbox-root")
        )}
    </>
  );
};
