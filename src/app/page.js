import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Btn from "@/components/buttons/bt.jsx";
import MidleHome from "@/components/midleHome/index.jsx";

export default function Home() {
  return (
    <>
      <Header/>
      <Btn/>
      <MidleHome/>
    </>
  );
}
