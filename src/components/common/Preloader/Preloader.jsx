import preloader from "../../../assets/images/loader.svg";

let Preloader = (props) => {
  return (
    <div style={{ bacgkroundColor: "white" }}>
      <img src={preloader} alt="loader animation" />
    </div>
  );
};

export default Preloader;
