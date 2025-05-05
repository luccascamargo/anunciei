import Link from "next/link";
import { Wrapper } from "./wrapper";

export function Footer() {
  return (
    <div className="w-full py-5 border-t mt-10">
      <Wrapper className="flex flex-col items-center justify-between h-full gap-4 flex-wrap md:flex-row">
        <div className="flex flex-col items-center md:items-end gap-12 md:flex-row">
          <Link href="/" className="text-xl font-bold">
            anunciei.app
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/politicas-de-privacidade"}>
            Politica de privacidade
          </Link>
          <Link href={"/termos-de-uso"}>Termos de uso</Link>
        </div>
        <p className="text-sm font-normal">
          © 2025 Anunciei. Todos os direitos reservados.
        </p>
      </Wrapper>
    </div>
  );
}
