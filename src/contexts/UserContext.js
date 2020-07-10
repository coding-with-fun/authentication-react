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
    if (password === confirmPassword) {
      const data = {
        name: name,
        userName: userName,
        inputEmail: inputEmail,
        password: password,
        isValid: true,
      };
      localStorage.setItem("userData", JSON.stringify(data));
    } else {
      alert("Invalid password!");
    }
  };

  const validate = (e) => {
    let data = localStorage.getItem("userData");
    data = JSON.parse(data);
    if (data && data.password === userPassword) {
      data.isValid = true;
      localStorage.setItem("userData", JSON.stringify(data));
    } else {
      e.preventDefault();
      alert("Invalid password!");
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
          name: name,
          setName: setName,
          userName: userName,
          setUserName: setUserName,
          inputEmail: inputEmail,
          setInputEmail: setInputEmail,
          password: password,
          setPassword: setPassword,
          confirmPassword: confirmPassword,
          setConfirmPassword: setConfirmPassword,
          userEmail: userEmail,
          setUserEmail: setUserEmail,
          userPassword: userPassword,
          setUserPassword: setUserPassword,
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
