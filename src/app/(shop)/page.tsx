import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-24">
       <h1>Hola</h1>
       <h1 className={titleFont.className}>Hola</h1>
    </div>
  );
}
