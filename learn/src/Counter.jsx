import React, { useState } from 'react'

export default function Counter() {
    const [value,setValue] = useState(0)
  
  return (
    <div>
      <h1 className='value'>{value}</h1>
      <button onClick={()=>{setValue(value+1)}}>Mujhe dabao</button>
    </div>
  )
}
