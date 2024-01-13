import React from 'react'
import ProductCard from './ProductCard'
import { Products } from '../data/Product'

const ProductList = () => {
  return (
    <div className='cards'>
      {Products.map((data, index) => (
        <ProductCard
          key={index}
          name={data.nama}
          deskripsi={data.deskripsi}
          imageUrl={data.imageURL}
        />
      ))}
    </div>
  )
}

export default ProductList
