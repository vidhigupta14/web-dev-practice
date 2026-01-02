import React from 'react'
import { memo } from 'react'

const Nav = ({adjective, getAdjective}) => {
  return (
    <>
    <div>Nav</div>
    <button onClick={() => getAdjective()}>{getAdjective()}</button>
    </>
  )
}

export default memo(Nav)