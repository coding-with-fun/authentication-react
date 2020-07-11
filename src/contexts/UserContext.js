import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [name, setName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [password, setPassword] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const saveValues = (e) => {
    // e.preventDefault();
    sessionStorage.setItem("userEmail", inputEmail);

    let usersList = localStorage.getItem("usersList");

    if (!usersList) {
      usersList = [inputEmail];
      localStorage.setItem("usersList", JSON.stringify(usersList));
    } else {
      usersList = JSON.parse(usersList);
      if (!usersList.includes(inputEmail)) {
        usersList = [...usersList, inputEmail];
        localStorage.setItem("usersList", JSON.stringify(usersList));
      } else {
        e.preventDefault();
        alert("Email ID already exist!!");
      }
    }

    let data = localStorage.getItem(inputEmail);
    data = JSON.parse(data);
    if (!password || !confirmPassword || password !== confirmPassword) {
      e.preventDefault();
      alert("Invalid password!");
    } else {
      if (data && inputEmail === data.inputEmail) {
        e.preventDefault();
        alert("Email ID already exist!!");
      } else {
        const data = {
          name: name,
          inputEmail: inputEmail,
          password: password,
          isValid: true,
        };
        localStorage.setItem(inputEmail, JSON.stringify(data));
      }
    }
  };

  const validate = (e) => {
    sessionStorage.setItem("userEmail", userEmail);
    const user = sessionStorage.getItem("userEmail");
    let data = localStorage.getItem(user);
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
          localStorage.setItem(user, JSON.stringify(data));
        }
      }
    }
  };

  const logOut = (e) => {
    const user = sessionStorage.getItem("userEmail");
    let data = localStorage.getItem(user);
    data = JSON.parse(data);
    data.isValid = false;
    localStorage.setItem(user, JSON.stringify(data));
  };

  return (
    <div>
      <UserContext.Provider
        value={{
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
