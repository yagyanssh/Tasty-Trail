import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios  from 'axios'

function App() {
  const [items, setitems] = useState([])

  useEffect(() => {
    axios.get('/api/fridge')
    .then((response) => {
      setitems(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>Welcome to tasty trail</h1>
      <p>Items in your Fridge : {items.length} </p>

      {
        items.map((item, index) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.Quatity}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
