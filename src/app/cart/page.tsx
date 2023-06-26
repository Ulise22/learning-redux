'use client'

import Image from 'next/image'
import { removeProductFromCart, changeName } from '@/redux/reducers/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Cart () {
  const dispatch = useDispatch()
  const { totalCount, productsList, totalPrice } = useSelector(state => state.cart)

  const changeProductName = (index) => {
    dispatch(changeName(index))
  }

  const removeProduct = (id, price) => {
    const datos = [id, price]

    dispatch(removeProductFromCart(datos))
  }
  return (
    <main>
      <h1 className='text-white text-5xl text-center'>Cart</h1>
      <h3 className='mb-4'>Productos totales: {totalCount} </h3>

      <article className='flex flex-col gap-5'>
        {productsList.map(product => {
          return (
            <section className='flex mx-8 items-center justify-between gap-4 border p-4' key={product.id}>
              <div className='flex items-center gap-4'>
                <button onClick={() => removeProduct(product.id, product.price)} className='p-2 bg-red-500 text-black'>Borrar</button>
                <Image src={product.image} alt='product from a store' width={200} height={200} />
                <div className='self-start'>
                  <h3 className='text-3xl font-semibold uppercase'> {product.name} </h3>
                  <p className='font-thin'> {product.year} </p>
                </div>
              </div>
              <h2 className='text-4xl mr-4 font-bold'> ${product.price} </h2>

              <button onClick={() => changeProductName(productsList.indexOf(product))} className='bg-red-500 text-black p-2'>Cambiar nombre</button>
            </section>
          )
        })}
      </article>

      <h2 className='text-4xl mt-4'>Total: <span className='font-bold'> {totalPrice} </span></h2>
    </main>
  )
}
