import Login from "../Login";
import NewUser from "../NewUser";
import { LuLogIn } from "react-icons/lu"

import { useState } from "react";

import styles from "./Auth.module.scss";

const Auth = () => {
  const [switchAuth, setSwithcAuth] = useState(false);
  const [loginError, setLogInError] = useState(false);
  const [creatMessage, setCreateMessage] = useState(false);
  return (
    <div className={styles.Auth}>
      <div className={styles.signInUp}>
        <Login
          show={switchAuth}
          setLogInError={setLogInError}
          loginError={loginError}
          setSwithcAuth={setSwithcAuth}
        />
        <NewUser show={switchAuth} />
      </div>
      <div className={styles.welcomeMessage}>
        <h1>{switchAuth ? "Hello friend!" : "Welcome!"}</h1>
        <p>
          {switchAuth
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestias!"
            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eos recusandae voluptate voluptatem."}
        </p>
        <button onClick={() => setSwithcAuth((prev) => !prev)}>
          {switchAuth ? "SignIn" : "SignUp"}
        </button>
      </div>
      <div className={styles.registerMessage}>
        {switchAuth ? (
          <>
            <p
              className={styles.loginBtn}
              onClick={() => setSwithcAuth((prev) => !prev)}
            >
              Log in <LuLogIn className={styles.login_icon} />{" "}
            </p>
          </>
        ) : (
          <>
            <p>Don't have an account?</p>
            <span onClick={() => setSwithcAuth((prev) => !prev)}>Register</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
