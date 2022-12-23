import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { submitUser } from "../Networking.js";
import { useState } from "react";

export default function CreateAccountForm(props) {
  const { changeUser } = props;
  const navigate = useNavigate();
  const [usernameExists, setUsernameExists] = useState(false);

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

    if (!values.repassword) {
      errors.repassword = "Required";
    }
    if (values.password !== values.repassword) {
      errors.repassword = "Passwords must match";
    }

    return errors;
  }

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        username: "",
        password: "",
        repassword: "",
      },
      validate,
      onSubmit: async (values) => {
        const response = await submitUser(values.username, values.password);
        if (response.code === 200) {
          (() => changeUser(values.username))();
          navigate("/search");
        } else if (response.code === 304) {
          setUsernameExists(true);
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

      <label htmlFor="repassword">Confirm Password</label>
      <input
        type="password"
        name="repassword"
        onChange={handleChange}
        onBlur={handleBlur}
        id="repassword"
      />
      {touched.repassword && errors.repassword ? (
        <div>{errors.repassword}</div>
      ) : null}

      <button type="submit">submit</button>

      {usernameExists ? (
        <p>Username already exists. Please try a different username</p>
      ) : null}
    </form>
  );
}
