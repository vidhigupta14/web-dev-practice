import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


// const route = () => {
//   return (
//     authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // ...add more providers here
//   ],
// }

//   )
// }

// export default route





// import {NextResponse} from "next/server";

// export async function GET() {
//   return Response.json({ message: 'Hello World' })
// }

// export async function POST(request) {
//   let data = await request.json()
//   console.log(data)
//   return NextResponse.json({ message: 'Data received successfully', data })
// }

