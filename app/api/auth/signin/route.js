// app/api/auth/signin/route.js (Updated to set a cookie)

import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();

  const storedUsername = process.env.PRIVATE_API_USERNAME;
  const storedPassword = process.env.PRIVATE_API_PASSWORD;

  if (!username || !password) {
    return NextResponse.json(
      { message: "Username and password are required." },
      { status: 400 },
    );
  }

  if (username === storedUsername && password === storedPassword) {
    return NextResponse.json(
      { message: "Login successful!" },
      {
        status: 200,
        headers: {
          "Set-Cookie": "isLoggedIn=true; Path=/; Max-Age=3600; SameSite=Lax",
        },
      },
    );
  } else {
    return NextResponse.json(
      { message: "Invalid username or password." },
      { status: 401 },
    );
  }
}
