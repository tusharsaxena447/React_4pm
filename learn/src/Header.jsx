import React from 'react'

export default function Header({array}) {
    console.log(array)
  return (
    <div>
      {array.map((e)=>{
        return <h1>{e.name}</h1> 
      }
      )}
    </div>
  )
}
