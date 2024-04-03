import React from 'react'

export default function Header({array}) {
    console.log(array)
  return (
    <div>
      <h1>{array[0].name}</h1>
    </div>
  )
}
