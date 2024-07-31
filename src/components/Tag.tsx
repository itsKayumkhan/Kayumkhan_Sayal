import React from 'react'

const Tag = ({text}:{text:string}) => {
  return (
    <>
<button className='rounded-xl text-black border-black px-4 py-2 text-center shadow-lg bg-white'>{text}</button>
    </>
  )
}

export default Tag
