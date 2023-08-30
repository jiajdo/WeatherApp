import { useEffect, useState } from "react"



function App() {
  const [name, setName] = useState('');

  const callBackEnd = async () => {
    const response = await fetch('http://localhost:8080/name')
    const data = await response.json();
    console.log(data)
    setName(data.name)
  }  

useEffect(() => {
  callBackEnd();
}, [])
  return (
  
    <div><h1>{name}</h1></div>

  )
}

export default App
