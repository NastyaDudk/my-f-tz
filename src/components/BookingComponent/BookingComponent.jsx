import style from "./BookingComponent.module.css";
import icons from "../../images/sprite.svg";
import { useState } from "react";

export const BookingComponent = () => {
  const [inputType, setInputType] = useState("text");

  const handleFocus = () => setInputType("date");

  const handleSubmit = ()=>{
    window.location.href = '/'
  }

  return (
    <div className={style.container}>
      <h3 className={style.title}>Book your campervan now</h3>
      <p className={style.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form action="" className={style.form}>
        <input
          type="text"
          id="userName"
          className={style.input}
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="email"
          className={style.input}
          placeholder="Email"
          required
        />{" "}
        <input
          type={inputType}
          id="date"
          className={style.input}
          placeholder="Booking date"
          required
          onFocus={handleFocus}
        />
        <button type="button" className={style.dateButton} disabled>
          <svg className={style.svg} width="20" height="20">
            <use href={`${icons}#icon-calendar`}></use>
          </svg>
        </button>
        <textarea
          id="comment"
          rows="4"
          className={style.inputComent}
          placeholder="Comment"
          maxLength="1000"
        />
        <button type="button" onClick={handleSubmit} className={style.submitButton}>
          Send
        </button>
      </form>
    </div>
  );
};
