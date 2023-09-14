import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import Auth from "@/components/Auth";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { auth } from "@/firebase";

import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [logged, setLogged] = useState(null);
  const router = useRouter();

    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("yeee", user);
          router.push(`${user.uid}`)
        } else {
          console.log("Noooo");
        }
      });
    });

       const logOut = () => {
         signOut(auth).then(() => {
          console.log("sucessfully logged out");
          setLogged(false);
         });
       };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {logged ? <div><button onClick={logOut}>logout</button></div> : <Auth />}
      
    </>
  );
}