import React from 'react'
import Header from './Header'

export default function App() {
    const arr = [{name:"Tushar"},{name:"Amit"},{name:"Harsh"}]
  return (
    <>
      <Header array={arr}/>
    </>
  )
}

