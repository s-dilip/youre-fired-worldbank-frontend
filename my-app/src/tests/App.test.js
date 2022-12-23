import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

// afterEach(() => {
//   global.fetch.mockRestore();
// });

// it("displays three forecast cards", async () => {
//   const mockData = { code: 304 };
//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(mockData),
//     })
//   );

//   render(<App />);
//   const createAccountButton = screen.getByRole("button", {
//     name: /Create Account/i,
//   });
//   fireEvent.click(createAccountButton);

//   const username_field = screen.getByLabelText("Username");
//   const password_field = screen.getByLabelText("Password");
//   fireEvent.change(username_field, { target: { value: "John Cena" } });
//   fireEvent.change(password_field, { target: { value: "asdf" } });
//   const submit_button = screen.getByRole("button", { name: /submit/i });
//   fireEvent.click(submit_button);

//   await waitFor(async () => {
//     const cityComponent = await screen.findAllByTestId("forecastCard");
//     expect(cityComponent).toHaveLength(3);
//   });
// });

it("App renders", () => {
  render(<App />);
});

test("Create account form contains at least one input field", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const input_field = screen.getByRole("textbox");
  expect(input_field).toBeInTheDocument();
});

test("Create account form contains username field", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const username_field = screen.getByLabelText("Username");
  expect(username_field).toBeInTheDocument();
});

test("Create account form contains password field", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const password_field = screen.getByLabelText("Password");
  expect(password_field).toBeInTheDocument();
});

test("Create account form contains confirm password field", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const confirm_password_field = screen.getByLabelText("Confirm Password");
  expect(confirm_password_field).toBeInTheDocument();
});

test("Create account page contains submit button", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const submit_button = screen.getByRole("button", { name: /submit/i });
  expect(submit_button).toBeInTheDocument();
});

test("Create account page contains login button", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const submit_button = screen.getByRole("button", { name: /log in/i });
  expect(submit_button).toBeInTheDocument();
});

test("Login form contains at least one input field", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const LoginButton = screen.getByRole("button", {
    name: /Log in/i,
  });
  fireEvent.click(LoginButton);
  const input_field = screen.getByRole("textbox");
  expect(input_field).toBeInTheDocument();
});

test("Login form contains username field", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const LoginButton = screen.getByRole("button", {
    name: /Log in/i,
  });
  fireEvent.click(LoginButton);
  const username_field = screen.getByLabelText("Username");
  expect(username_field).toBeInTheDocument();
});

test("Login form contains password field", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const LoginButton = screen.getByRole("button", {
    name: /Log in/i,
  });
  fireEvent.click(LoginButton);
  const password_field = screen.getByLabelText("Password");
  expect(password_field).toBeInTheDocument();
});

test("Login page contains submit button", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const LoginButton = screen.getByRole("button", {
    name: /Log in/i,
  });
  fireEvent.click(LoginButton);
  const submit_button = screen.getByRole("button", { name: /submit/i });
  expect(submit_button).toBeInTheDocument();
});

test("Login page contains create account button", () => {
  render(<App />);
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  fireEvent.click(createAccountButton);
  const LoginButton = screen.getByRole("button", {
    name: /Log in/i,
  });
  fireEvent.click(LoginButton);
  const submit_button = screen.getByRole("button", { name: /sign up/i });
  expect(submit_button).toBeInTheDocument();
});
