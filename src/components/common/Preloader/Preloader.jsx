import preloader from "../../../assets/images/loader.svg";
import React from "react";

let Preloader = (props) => {
  return (
    <div data-testid="preloader" style={{ bacgkroundColor: "white" }}>
      <img src={preloader} alt="loader animation" />
    </div>
  );
};

export default Preloader;
