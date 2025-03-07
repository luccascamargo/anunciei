import Link from "next/link";
import { Button } from "./ui/button";
import { Wrapper } from "./wrapper";

export function Footer() {
  return (
    <div className="w-screen h-[150px]">
      <Wrapper className="flex items-center justify-between h-full">
        <div className="flex items-center gap-6">
          <Link href="#" className="text-primary text-3xl font-semibold">
            iGarage
          </Link>
          <Button variant={"link"} className="text-primary">
            Home
          </Button>
          <Button variant={"link"} className="text-primary">
            Politica de privacidade
          </Button>
          <Button variant={"link"} className="text-primary">
            Termos de uso
          </Button>
        </div>
        <p className="text-sm font-normal text-primary">
          © 2025 iGarage. Todos os direitos reservados.
        </p>
      </Wrapper>
    </div>
  );
}
