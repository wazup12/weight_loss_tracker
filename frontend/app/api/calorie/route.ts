import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
) : Promise<NextResponse> {
  const { date, calories } = await request.json();
  const res = await fetch("/api/calorie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date, calories }),
  });
  return new NextResponse(res);
}
