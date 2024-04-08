import React from 'react'
// import Header from './Header'
// import Counter from './Counter'
import Card from './Card'
import data from "./user.json"

export default function App() {
    // const arr = [{name:"Tushar"},{name:"Amit"},{name:"Harsh"}]
    // console.log(arr)
  return (
    <>
    {data.map((list) => (
      
      <Card key={list.id} title = {list.name} desc = {list.email} phone={list.phone}/>
    ))}
      {/* <Header array={arr}/>
      <Counter /> */}
    </>
  )
}

