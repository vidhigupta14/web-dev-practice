"use client"
import { SessionProvider } from "next-auth/react"

const sessionWrapper = ({children}) => {
  return (

    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default sessionWrapper

// import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }