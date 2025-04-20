import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface LoadingModalProps {
  isOpen: boolean;
  title: string;
  subTitle: string;
  description: string;
}

export function LoadingModal({
  isOpen,
  title,
  subTitle,
  description,
}: LoadingModalProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="w-full max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center text-center justify-center gap-4 py-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <h3 className="text-lg font-semibold">{subTitle}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
