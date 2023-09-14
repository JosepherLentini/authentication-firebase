import { useRouter } from "next/navigation";
// Firebase setting
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
// Hooks
import { useEffect, useState } from "react";
//Style
import styles from "../styles/Account.module.scss";
export default function () {
  const [userData, setUserData] = useState({});
  const router = useRouter();
  const signOutUser = () => {
    signOut(auth).then(() => router.push("/"));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      } else {
        console.log(error);
      }
    });
  }, []);
  return (
    <div className={styles.Account}>
      <div className={styles.mainMessage}>
        <h1>Welcome to our house!</h1>
        <h2>
          {userData.displayName
            ? userData.displayName
            : userData.email}
        </h2>
      </div>

      <div className={styles.logout}>
        <button onClick={() => signOutUser()}>Log Out</button>
        <span>and</span>
        <p>Don't forget to close the door!</p>
      </div>
    </div>
  );
}
