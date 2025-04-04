import type { Metadata } from "next";
import { AuthProvider } from "@/contexts/userContext";
import { Sora } from "next/font/google";
import "./globals.css";
import { auth } from "@/lib/auth";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Providers } from "@/provider/queryClientProvider";
import { Toaster } from "sonner";

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "AppGarage - Facilite sua venda",
  keywords: [
    "Anúncios de veículos Rio Grande do Sul",
    "Compra e venda de carros RS",
    "Plataforma de veículos RS",
    "Carros novos e usados RS",
    "Motos e caminhões à venda RS",
    "Mercado automotivo gaúcho",
    "App de veículos RS",
    "Vender carro no RS",
    "Comprar veículo no Rio Grande do Sul",
    "Anúncios automotivos RS",
  ],
  description:
    "AppGarage - Encontre os melhores anúncios de veículos no Rio Grande do Sul. Compre e venda carros, motos e caminhões na nossa plataforma especializada.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth();

  return (
    <html lang="en">
      <body className={`${soraSans.className} antialiased`}>
        <Providers>
          <AuthProvider user={user}>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
