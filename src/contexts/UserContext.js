import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [password, setPassword] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const saveValues = (e) => {
    let data = localStorage.getItem("userData");
    data = JSON.parse(data);
    if (!password || !confirmPassword || password !== confirmPassword) {
      e.preventDefault();
      alert("Invalid password!");
    } else {
      if (data && inputEmail === data.inputEmail) {
        e.preventDefault();
        alert("Email ID already exist!!");
      } else {
        if (data && userName === data.userName) {
          e.preventDefault();
          alert("Username already exist!!");
        } else {
          const data = {
            name: name,
            userName: userName,
            inputEmail: inputEmail,
            password: password,
            isValid: true,
          };
          localStorage.setItem("userData", JSON.stringify(data));
        }
      }
    }
  };

  const validate = (e) => {
    let data = localStorage.getItem("userData");
    data = JSON.parse(data);
    if (!data) {
      e.preventDefault();
      alert("User does not exist!!");
    } else {
      if (data && data.password !== userPassword) {
        e.preventDefault();
        alert("Invalid password!");
      } else {
        if (data && userEmail !== data.inputEmail) {
          e.preventDefault();
          alert("Email ID does not exist!!");
        } else {
          data.isValid = true;
          localStorage.setItem("userData", JSON.stringify(data));
        }
      }
    }
  };

  const logOut = (e) => {
    let data = localStorage.getItem("userData");
    data = JSON.parse(data);
    data.isValid = false;
    localStorage.setItem("userData", JSON.stringify(data));
  };

  return (
    <div>
      <UserContext.Provider
        value={{
          setUserName: setUserName,
          setUserPassword: setUserPassword,
          setName: setName,
          setInputEmail: setInputEmail,
          setPassword: setPassword,
          setConfirmPassword: setConfirmPassword,
          setUserEmail: setUserEmail,

          saveValues: saveValues,
          validate: validate,
          logOut: logOut,
        }}
      >
        {props.children}
      </UserContext.Provider>
    </div>
  );
};
