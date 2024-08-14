import Image from "next/image";
import Accordian from "./components/Accordian";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Accordian />
    </main>
  );
}
