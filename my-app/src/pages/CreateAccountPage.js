import CreateAccountForm from "../components/CreateAccountForm.js";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function CreateAccountPage(props) {
  const { changeUser } = props;
  return (
    <div className="container">
      <h1>Create Account</h1>
      <CreateAccountForm changeUser={changeUser} />
      <p>Already have an account?</p>
      <Link to="/login">
        <Button color="inherit">Log in</Button>
      </Link>
    </div>
  );
}
