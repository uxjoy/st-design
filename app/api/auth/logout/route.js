import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Logged out successfully" },
    {
      status: 200,
      headers: {
        "Set-Cookie": "isLoggedIn=; Path=/; Max-Age=0; SameSite=Lax",
      },
    },
  );
}
