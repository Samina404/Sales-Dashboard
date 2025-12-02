import { NextResponse } from "next/server";

// Server-side proxy for authorization
export async function GET() {
  try {
    const res = await fetch("https://devapi.beyondchats.com/api/getAuthorize", {
      method: "POST",
    });

    if (!res.ok) throw new Error("Failed to get auth token");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
