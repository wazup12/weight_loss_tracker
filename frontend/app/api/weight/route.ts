import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
) : Promise<NextResponse> {
  const { date, weight } = await request.json();
  const res = await fetch("/api/weight", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date, weight }),
  });
  return new NextResponse(res);
}
