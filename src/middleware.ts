import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("accessToken");
  const accessToken = cookie?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: "/admin/:path*",
};
