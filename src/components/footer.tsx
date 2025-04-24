import Link from "next/link";
import { Wrapper } from "./wrapper";
import Image from "next/image";

export function Footer() {
  return (
    <div className="w-full py-5 border-t mt-10">
      <Wrapper className="flex flex-col items-center justify-between h-full gap-4 flex-wrap md:flex-row">
        <div className="flex flex-col items-end gap-6 md:flex-row">
          <Link href="#" className=" text-3xl font-semibold">
            <Image src={"/anunciei.svg"} width={52} height={37} alt="" />
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"politicas-de-privacidade"}>Politica de privacidade</Link>
          <Link href={"/termos-de-uso"}>Termos de uso</Link>
        </div>
        <p className="text-sm font-normal">
          © 2025 Anunciei. Todos os direitos reservados.
        </p>
      </Wrapper>
    </div>
  );
}
