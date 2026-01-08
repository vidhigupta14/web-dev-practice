import React from 'react'
import type { Metadata } from "next";

const about = () => {
  return (
    <>
      <div>I am about</div>
      <h1>About</h1>
    </>
  )
}

export default about

export const metadata: Metadata = {
  title: "About Website",
  description: "About page of Website",
};