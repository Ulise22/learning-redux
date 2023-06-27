'use client'

import Image from 'next/image'
import { removeProductFromCart, addOneProduct, subtractProduct } from '@/redux/reducers/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Cart () {
  const dispatch = useDispatch()
  const { totalCount, productsList, totalFee } = useSelector(state => state.cart)

  const addOrSubtractProduct = (index, amount, add) => {
    if (add) {
      dispatch(addOneProduct(index))
    } else {
      if (amount > 1) {
        dispatch(subtractProduct(index))
      }
    }
  }

  const removeProduct = (id) => dispatch(removeProductFromCart(id))
  return (
    <main>
      <h1 className='text-white text-5xl text-center'>Cart</h1>
      <h3 className='mb-4'>Productos totales: {totalCount} </h3>

      <article className='flex flex-col gap-5'>
        {productsList.map(product => {
          return (
            <section className='flex mx-8 items-center justify-between gap-4 border p-4' key={product.id}>
              <div className='flex items-center gap-4'>
                <button onClick={() => removeProduct(product.id)} className='p-2 bg-red-500 text-black'>Borrar</button>
                <Image src={product.image} alt='product from a store' width={200} height={200} />
                <div className='self-start'>
                  <h3 className='text-3xl font-semibold uppercase'> {product.name} </h3>
                  <p className='font-thin'> {product.year} </p>
                </div>
              </div>
              <h2 className='text-4xl mr-4 font-bold'> ${product.totalPrice} </h2>
              <div className='flex gap-5 items-center'>
                <button onClick={() => addOrSubtractProduct(productsList.indexOf(product), product.amount, false)} className='bg-red-500 text-black p-4'>-</button>
                <p> {product.amount} </p>
                <button onClick={() => addOrSubtractProduct(productsList.indexOf(product), product.amount, true)} className='bg-red-500 text-black p-4'>+</button>
              </div>
            </section>
          )
        })}
      </article>

      <h2 className='text-4xl mt-4'>Total: <span className='font-bold'> {totalFee} </span></h2>
    </main>
  )
}
