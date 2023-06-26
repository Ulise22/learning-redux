'use client'

import data from '@/components/data.json'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '@/redux/reducers/cartSlice'

export default function Mall () {
  const dispatch = useDispatch()
  const { productsList } = useSelector(state => state.cart)
  const addProduct = (productId) => {
    const product = data.find(product => product.id === productId)
    if (!productsList.find(item => item === product)) {
      dispatch(addProductToCart(product))
    }
  }
  return (
    <main className='flex flex-col items-center gap-4'>
      <h1 className='text-white text-5xl text-center'>Mall</h1>
      <article className='flex flex-col gap-8'>
        {data.map(products => {
          return (
            <section className='border w-fit flex flex-col items-center py-3' key={products.id}>
              <h2 className='text-2xl text-green-300 uppercase'> {products.name} </h2>
              <span> {products.year} </span>
              <Image src={products.image} alt='product' width={200} height={200} />
              <h3 className='font-bold text-xl'> ${products.price} </h3>
              <button className='p-3 rounded-md bg-red-500 text-black' onClick={() => addProduct(products.id)}>Agregar</button>
            </section>
          )
        })}
      </article>
    </main>
  )
}
