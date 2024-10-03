import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={style.notFoundPage}>
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/" className={style.homeLink}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
