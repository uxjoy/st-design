// app/api/icons/route.js

import { getIconsByCategory } from "@/lib/icons";
import { NextResponse } from "next/server";

export async function GET() {
  const icons = await getIconsByCategory();
  return NextResponse.json(icons);
}
