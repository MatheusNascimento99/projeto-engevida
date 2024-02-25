import Image from "next/image";
import Header from "@/components/header";
import Btn from "@/components/buttons/bt.jsx";
import MidleVenda from "@/components/MidleVenda/index";

export default function Home() {
  return (
    <>
      <Header/>
      <Btn/>
      <MidleVenda/>
    </>
  );
}
