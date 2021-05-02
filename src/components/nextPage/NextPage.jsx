import s from "./NextPage.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export function NextPage({ href, disabled = false }) {
  return (
    <Button
      disableElevation
      variant="contained"
      color="link"
      className={s.button}
      disabled={disabled}
    >
      <Link className={s.NextPage} to={href}>
        Next Page &gt;
      </Link>
    </Button>
  );
}
