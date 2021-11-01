import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "./main";
import Goodbye from "./goodbye";

export default function Home() {
  return (
    <div>
      <Main />
      <Goodbye />
    </div>
  );
}
