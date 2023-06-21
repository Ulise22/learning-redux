'use client'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUser } from '@/redux/reducers/userSlice'

export default function Home () {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userToken, setUserToken] = useState()
  const dispatch = useDispatch()
  const { email, fullName, token } = useSelector(state => state.user)

  const handleName = (e) => {
    e.preventDefault()

    setUserName(e.target.value)
  }

  const handleEmail = (e) => {
    e.preventDefault()

    setUserEmail(e.target.value)
  }

  const handleToken = (e) => {
    e.preventDefault()

    setUserToken(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(setUser({ email: userEmail, fullName: userName, token: userToken }))
  }
  return (
    <main className=''>
      hola xd
      <p>Email: {email} </p>
      <p>Fullname: {fullName} </p>
      <p>Token: {token} </p>
      <form onSubmit={handleSubmit} className='flex gap-2 flex-col w-3/12'>
        <input onChange={handleName} className='p-1 text-black' type='text' placeholder='name' />
        <input onChange={handleEmail} className='p-1 text-black' type='email' placeholder='email' />
        <input onChange={handleToken} className='p-1 text-black' type='number' placeholder='token' />

        <button className='p-2 bg-red-400 text-black'>
          Cambiar Usuario
        </button>
      </form>
    </main>
  )
}
