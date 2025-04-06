import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface LoadingModalProps {
  isOpen: boolean;
  title: string;
  description: string;
}

export function LoadingModal({
  isOpen,
  title,
  description,
}: LoadingModalProps) {
  return (
    <Dialog open={isOpen}>
      {/* <DialogTitle>Cadastrando anúncio</DialogTitle> */}
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center justify-center gap-4 py-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground text-center">
            {description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
