import React from "react";

// import styel
import style from "./loader.module.scss";
const Loader = () => {
  return (
    <div className={style.loader__wrapper}>
      <div className={style.border}></div>
    </div>
  );
};

export default Loader;
