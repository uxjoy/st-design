import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const loggedInCookie = cookies().get("isLoggedIn");
  const userIsLoggedIn = loggedInCookie && loggedInCookie.value === "true";

  if (userIsLoggedIn) {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
