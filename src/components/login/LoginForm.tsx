import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import "./login.css";

const account1 = {
  username: "Carlos",
  pin: 1111,
};
const account2 = {
  username: "Steven",
  pin: 2222,
};
const account3 = {
  username: "Jessica",
  pin: 333,
};
const account4 = {
  username: "Davis",
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchingAccount = accounts.find(
      (account) => account.username === username && account.pin === Number(pin)
    );
    if (matchingAccount) {
      setError("You have successfully logged in.");
    } else {
      setError("Incorrect username or password.");
    }
  };

  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPin(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="sign-in-form" action="">
        <div>
          <div className="w-[80%]">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUserNameInput}
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="w-[80%]">
              <input
                type={showPassword ? "text" : "password"}
                value={pin}
                placeholder="password"
                onChange={handlePasswordInput}
              />
            </div>
            <div className=" justify-center flex mb-5">
              <button
                className="password-toggle-btn "
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>

        {/* <label>
          Username
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={handleUserNameInput}
          />
        </label>
        <label>
          Password
          <div className="password-input ">
            <input
              type={showPassword ? "text" : "password"}
              value={pin}
              placeholder="password"
              className="text-black"
              onChange={handlePasswordInput}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>
        <br /> */}
        <button className="loginbtn" type="submit">
          Login
        </button>
        <div className="error" key="error-message">
          {error && <div>{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
