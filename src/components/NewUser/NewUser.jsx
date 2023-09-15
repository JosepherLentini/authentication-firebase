import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth, provider } from "@/firebase";
import styles from "./NewUser.module.scss";
// Hooks
import {useState } from "react";
// icons
import GoogleIcon from "../Icons/Google";

const NewUser = ({ show }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCredential, setErrorCredential] = useState("");
   const [createMessage, setCreateMessage] = useState(false);

  const createUser = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setCreateMessage(true)
         
         setTimeout(() => {
           setCreateMessage(false);
         }, 4000);
      })
      .catch((error) => {
        setErrorCredential(true);
        setTimeout(() => {
          setErrorCredential(false);
        }, 3000);
        console.log(error);
      });

    e.target[0].value = "";
    e.target[1].value = "";
  };

    const signInPopup = () => {
      signInWithPopup(auth, provider);
    };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => createUser(e)}
        className={`${styles.NewUser} ${show && styles.show}`}
      >
        <h1>Create your account</h1>

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
        <input type="submit" value="Create" />
        {errorCredential && (
          <div className={styles.error}>
            Add the correct credentials
          </div>
        )}

        <div className={styles.or}>or</div>

        <div className={styles.loginApp} onClick={() => signInPopup()}>
          <GoogleIcon className={styles.GoogleIcon} />
          <span>Access with Google</span>
        </div>

        {createMessage && (
          <div className={styles.accoutCreated}>
            <p>Account successfully created!</p>
          </div>
        )}
      </form>
    </>
  );
};

export default NewUser;
