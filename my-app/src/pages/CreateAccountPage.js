import { useFormik } from "formik";
import { submitUser } from "../Networking.js";

export default function CreateAccountPage() {
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
      onSubmit: (values) => {
        submitUser(values.username, values.password);
      },
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.username && errors.username ? (
        <div>{errors.username}</div>
      ) : null}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ) : null}

      <label htmlFor="repassword">Confirm Password:</label>
      <input
        type="password"
        name="repassword"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.repassword && errors.repassword ? (
        <div>{errors.repassword}</div>
      ) : null}

      <button type="submit">submit</button>
    </form>
  );
}
