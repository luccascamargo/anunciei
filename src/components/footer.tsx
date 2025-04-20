import Link from "next/link";
import { Wrapper } from "./wrapper";
import Image from "next/image";

export function Footer() {
  return (
    <div className="w-screen py-5 border-t mt-10">
      <Wrapper className="flex flex-col items-center justify-between h-full gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Link href="#" className=" text-3xl font-semibold">
            <Image src={"/appgarage.svg"} width={52} height={52} alt="" />
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"politica-de-privacidade"}>Politica de privacidade</Link>
          <Link href={"/termos-de-uso"}>Termos de uso</Link>
        </div>
        <p className="text-sm font-normal">
          © 2025 iGarage. Todos os direitos reservados.
        </p>
      </Wrapper>
    </div>
  );
}
