import { useEffect, useState } from "react"
import Form from "./components/Form";



function App() {
  const [cityToFetch, setCityToFetch] = useState('');
  const [name, setName] = useState('');
  const [data, setData] = useState();
  const [city, setCity] = useState('');
  



  const callBackEnd = async () => {
    const response = await fetch(`http://localhost:8080/api?cityToFetch=${cityToFetch}`)
    const weatherData = await response.json();
    console.log(weatherData)
    setData(weatherData.weather[0].description)
  }

  useEffect(() => {
    if (cityToFetch.length > 0) {
      callBackEnd();
    }
  }, [cityToFetch])

  return (
    <div>
      <h1>{data}</h1>
      <Form setCity={setCity} setCityToFetch={setCityToFetch} city={city} />
    </div>
  )
}

export default App
