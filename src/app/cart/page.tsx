'use client'

import { useSelector } from 'react-redux'

export default function Cart () {
  const { totalCount, productsList } = useSelector(state => state.cart)
  return (
    <main>
      <h1 className='text-white text-5xl text-center'>Cart</h1>
      <h3> {totalCount} </h3>

      {productsList.map(product => {
        return (
          <section key={product.id}>
            <h4> {product.name} </h4>
          </section>
        )
      })}
    </main>
  )
}
