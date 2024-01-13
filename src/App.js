import React, { useState } from 'react'
import { Products } from './data/Product'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
const App = () => {
  // const [counter, setCounter] = useState(0)
  // const decrement = () => {
  //   setCounter(counter - 1)
  //   console.log(counter)
  // }
  // const increment = () => {
  //   setCounter(counter + 1)
  //   console.log(counter)
  // }

  return (
    <div>
      <div>
        <div className='app-title'>Belanja Mobil</div>
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  )
}

export default App
