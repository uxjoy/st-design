import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const loggedInCookie = cookieStore.get("isLoggedIn");
  const userIsLoggedIn = loggedInCookie && loggedInCookie.value === "true";

  if (userIsLoggedIn) {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
