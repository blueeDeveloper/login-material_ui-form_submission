import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = (props) => {
  const { userFormData } = props;
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorText, setFirstNameErrorText] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [userNameErrorText, setUserNameErrorText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const change = (name, e) => {
    if (name === "setFirstName") setFirstName(e.target.value);
    else if (name === "setUserName") setUserName(e.target.value);
    else if (name === "setPassword") setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      userName === "" ||
      password === "" ||
      (password !== "" && (password.length < 5 || password.length > 10))
    ) {
      if (firstName === "") {
        setFirstNameError(true);
        setFirstNameErrorText("Please enter first name...");
      } else {
        setFirstNameError(false);
        setFirstNameErrorText("");
      }
      if (userName === "") {
        setUserNameError(true);
        setUserNameErrorText("Please enter user name...");
      } else {
        setUserNameError(false);
        setUserNameErrorText("");
      }
      if (password === "") {
        setPasswordError(true);
        setPasswordErrorText("Please enter password...");
      } else if (
        (password !== "") &
        (password.length < 5 || password.length > 10)
      ) {
        setPasswordError(true);
        setPasswordErrorText(
          "Password length should be between 5 and 10 characters..."
        );
      } else {
        setPasswordError(false);
        setPasswordErrorText("");
      }
    } else {
      let fields = {
        firstName,
        userName,
        password,
      };
      userFormData(fields);
      setFirstName("");
      setFirstNameError(false);
      setFirstNameErrorText("");
      setUserName("");
      setUserNameError(false);
      setUserNameErrorText("");
      setPassword("");
      setPasswordError(false);
      setPasswordErrorText("");
    }
  };
  return (
    <>
      <h3 className="title">Login Page</h3>
      <form className="formContainer">
        <TextField
          required
          error={firstNameError}
          helperText={firstNameErrorText}
          id="standard-required"
          label="First Name"
          onChange={(e) => change("setFirstName", e)}
          value={firstName}
        />
        <TextField
          required
          error={userNameError}
          helperText={userNameErrorText}
          id="standard-required"
          label="UserName"
          onChange={(e) => change("setUserName", e)}
          value={userName}
        />
        <TextField
          id="standard-required"
          error={passwordError}
          helperText={passwordErrorText}
          label="Password"
          type="password"
          onChange={(e) => change("setPassword", e)}
          value={password}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          style={{ display: "block", marginTop: 20 }}
          variant="contained"
          onClick={(e) => onSubmit(e)}
          color="primary"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
