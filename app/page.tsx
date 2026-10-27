import Image from "next/image";
import FormularioRegistro from "./Components/FormularioRegistro";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FormularioRegistro></FormularioRegistro>
          </div>
  );
}
