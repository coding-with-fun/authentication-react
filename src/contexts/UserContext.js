import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [name, setName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  // Values check at Sign In
  const saveValues = (e) => {
    // Set new email ID to session storage
    sessionStorage.setItem("userEmail", inputEmail);

    // Get list of users from local storage
    let usersList = localStorage.getItem("usersList");

    if (!usersList) {
      // Is user list is empty add new user to it
      usersList = [inputEmail];
      localStorage.setItem("usersList", JSON.stringify(usersList));
    } else {
      // If user list is not empty check validations
      usersList = JSON.parse(usersList);
      if (usersList.includes(inputEmail)) {
        e.preventDefault();
        alert("Email ID already exist!!");
      } else {
        usersList = [...usersList, inputEmail];
        localStorage.setItem("usersList", JSON.stringify(usersList));
      }
    }

    if (!password || !confirmPassword || password !== confirmPassword) {
      e.preventDefault();
      alert("Invalid password!");
    } else {
      const data = {
        name: name,
        email: inputEmail,
        password: password,
        isValid: true,
      };
      localStorage.setItem(inputEmail, JSON.stringify(data));
    }
  };

  // Data validation at login
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
        if (data && userEmail !== data.email) {
          e.preventDefault();
          alert("Email ID does not exist!!");
        } else {
          data.isValid = true;
          localStorage.setItem(user, JSON.stringify(data));
        }
      }
    }
  };

  // Setting validation to false at logout
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
