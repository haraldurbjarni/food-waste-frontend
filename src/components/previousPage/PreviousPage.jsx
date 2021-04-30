import s from "./PreviousPage.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export function PreviousPage({ href }) {
  return (
    <Button style= {{margin: 20}}color="primary" >
      <Link className={s.PreviousPage} to={href}>
        &lt; Previous page
      </Link>
    </Button>
  );
}
