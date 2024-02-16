import Image from "next/image";
import Header from "@/components/header";
import Btn from "@/components/buttons/bt.jsx";
import MidleClient from "@/components/MidleClient/index.jsx";

export default function Home() {
  return (
    <>
      <Header/>
      <Btn/>
      <MidleClient/>
    </>
  );
}
