import { Oval } from "react-loader-spinner";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <Oval
        height={80}
        width={80}
        color="#007bff"
        wrapperClass={style.loader}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#0056b3"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
