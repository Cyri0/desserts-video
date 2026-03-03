import { useEffect, useState } from "react"
import AddToCartBtn from "./components/AddToCartBtn"
import DessertCard from "./components/DessertCard"

const App = () => {
  const [sutik, setSutik] = useState([])

  useEffect(()=>{
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
      setSutik(data)
    })
  },[])
  
  return (
    <div>
      <h1>Desserts</h1>

      <div className="cardGrid">
      { sutik.map(suti => <DessertCard 
                            image={suti.image.desktop} 
                            category={suti.category}
                            name={suti.name}
                            price={suti.price}
                          />) }
      </div>
    </div>
  )
}

export default App