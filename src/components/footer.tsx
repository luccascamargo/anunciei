import Link from "next/link";
import { Wrapper } from "./wrapper";

export function Footer() {
  return (
    <div className="w-screen h-[150px] border-t mt-10">
      <Wrapper className="flex items-center justify-between h-full">
        <div className="flex items-center gap-6">
          <Link href="#" className=" text-3xl font-semibold">
            {/* <Image src={"/appgarage.png"} width={50} height={50} alt="" /> */}
            appgarage
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
