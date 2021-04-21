import s from "./NextPage.module.scss";
import { Link } from "react-router-dom";

export function NextPage({ href }) {
  return (
    <div className={s.NextPage__wrapper}>
      <Link className={s.NextPage} to={href}>
        Next Page &gt;
      </Link>
    </div>
  );
}
