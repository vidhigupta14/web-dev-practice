import {NextResponse} from "next/server";

export async function GET() {
  return Response.json({ message: 'Hello World' })
}

export async function POST(request) {
  let data = await request.json()
  console.log(data)
  return NextResponse.json({ message: 'Data received successfully', data })
}