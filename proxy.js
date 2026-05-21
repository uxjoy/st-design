import { NextResponse } from "next/server";

export function proxy(request) {
  const loggedInCookie = request.cookies.get("isLoggedIn");
  const userIsLoggedIn = loggedInCookie && loggedInCookie.value === "true";

  const PUBLIC_PATHS = ["/signin", "/_next", "/favicon.ico"];

  const url = request.nextUrl.clone();
  const path = url.pathname;

  if (userIsLoggedIn) {
    if (path === "/signin") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  } else {
    if (PUBLIC_PATHS.some((publicPath) => path.startsWith(publicPath))) {
      return NextResponse.next();
    }
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
