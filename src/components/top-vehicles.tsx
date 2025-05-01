import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TopVehicles() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>HC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Honda Civic 2022</p>
          <p className="text-sm text-muted-foreground">
            CTR: 5.8% | Contatos: 78
          </p>
        </div>
        <div className="ml-auto font-medium">3,245 views</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jeep Compass 2023</p>
          <p className="text-sm text-muted-foreground">
            CTR: 6.1% | Contatos: 92
          </p>
        </div>
        <div className="ml-auto font-medium">4,123 views</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>VG</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Volkswagen Golf GTI 2020
          </p>
          <p className="text-sm text-muted-foreground">
            CTR: 5.5% | Contatos: 81
          </p>
        </div>
        <div className="ml-auto font-medium">3,567 views</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>TC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Toyota Corolla 2021
          </p>
          <p className="text-sm text-muted-foreground">
            CTR: 5.2% | Contatos: 65
          </p>
        </div>
        <div className="ml-auto font-medium">2,987 views</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Hyundai HB20 2022</p>
          <p className="text-sm text-muted-foreground">
            CTR: 5.1% | Contatos: 62
          </p>
        </div>
        <div className="ml-auto font-medium">2,845 views</div>
      </div>
    </div>
  );
}
