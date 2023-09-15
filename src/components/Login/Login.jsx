import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase";
//Styles
import styles from "./Login.module.scss";
// Hooks
import { useEffect, useState } from "react";
// icons
import GoogleIcon from "../Icons/Google";

const Login = ({ show, setLogInError, loginError, setSwithcAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
        setLogInError(true);
        setEmail("");
        setPassword("");
      });

    e.target[0].value = "";
    e.target[1].value = "";
  };

  const signInPopup = async () => {
    await signInWithPopup(auth, provider));
  };
  return (
    <form
      action=""
      onSubmit={(e) => signIn(e)}
      className={`${styles.Login} ${show && styles.show}`}
    >
      <h1>Log In</h1>

      <div className={styles.loginApp} onClick={() => signInPopup()}>
        <GoogleIcon className={styles.GoogleIcon} />
        <span>Log In with Google</span>
      </div>
      

      <div className={styles.or}>or</div>

      <input
        type="email"
        name="User"
        placeholder="Your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="Password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="LogIn" />

      {loginError && (
        <div className={styles.error}>
          Account not found enter right credentials
          <p>or</p>
          <p className={styles.sign} onClick={() => setSwithcAuth(true)}>
            create an account
          </p>
        </div>
      )}
    </form>
  );
};

export default Login;
