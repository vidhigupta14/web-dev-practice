import React from 'react'

const blogpost = async ({params}) => {
    const {slug} = await params
  return (
    <div>hello {slug}</div>
  )
}

export default blogpost