import React from 'react'
import { Products } from './data/Product'
import ProductCard from './components/ProductCard'
const App = () => {
  return (
    <div className="cards">
      {Products.map((data, array) => (
        <ProductCard
          key={array}
          name={data.nama}
          deskripsi={data.deskripsi}
          imageUrl={data.imageURL}
        />
      ))}
    </div>
  )
}

export default App
