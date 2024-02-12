import Image from "next/image";
import Header from "@/components/header";
import Btn from "@/components/buttons/bt.jsx";
import MidleService from "@/components/MidleService/index.jsx";

export default function Home() {
  return (
    <>
      <Header/>
      <Btn/>
      <MidleService/>
    </>
  );
}
