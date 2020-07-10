import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const saveValues = () => {
    if (password === confirmPassword) {
      setIsValid(true);
      const data = {
        name: name,
        userName: userName,
        inputEmail: inputEmail,
        password: password,
        confirmPassword: confirmPassword,
        isValid: isValid,
      };
      localStorage.setItem(inputEmail, JSON.stringify(data));
    }
  };

  const validate = () => {
    let data = localStorage.getItem(inputEmail);
    data = JSON.parse(data);
    if (data && data.password === password) {
      data.isValid = true;
    }
  };

  const logOut = () => {
    let data = localStorage.getItem(inputEmail);
    data = JSON.parse(data);

    data.isValid = false;
    localStorage.setItem(inputEmail, JSON.stringify(data));
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
