"use client"
import { SessionProvider } from "next-auth/react"

import React from 'react'

const sessionWrapper = ({ session, children }) => {
  return (
    <SessionProvider session={session}>{children}</SessionProvider>
  )
}

export default sessionWrapper