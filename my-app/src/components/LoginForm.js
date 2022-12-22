import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Networking.js";
import { useState } from "react";

export default function CreateAccountForm(props) {
  const { changeUser } = props;
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState(null);

  function validate(values) {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (values.username.length > 20) {
      errors.username = "Username can have a maximum of 20 characters";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    if (values.password.length > 20) {
      errors.password = "Password can have a maximum of 20 characters";
    }

    return errors;
  }

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        username: "",
        password: "",
      },
      validate,
      onSubmit: async (values) => {
        const response = await checkUser(values.username, values.password);
        if (response.code === 200) {
          (() => changeUser(values.username))();
          console.log("here");
          navigate("/search");
        } else if (response.code === 404) {
          setValidationError("Username does not exist. Please try again");
        } else if (response.code === 400) {
          setValidationError("Incorrect password. Please try again");
        }
      },
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        onBlur={handleBlur}
        id="username"
      />
      {touched.username && errors.username ? (
        <div>{errors.username}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
      />
      {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ) : null}

      <button type="submit">submit</button>

      <p>{validationError}</p>
    </form>
  );
}
