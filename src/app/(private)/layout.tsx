import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = isAuthenticated();

  if (!isAuth) {
    // Redirect to the sign-in page if the user is not authenticated
    redirect("/signin");
  }

  return <div>{children}</div>;
}
