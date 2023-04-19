import { useState } from 'react'


export default function Password() {
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <div> 
      <label htmlFor="name"> &ensp;Password : </label>
      <input required type={passwordShown ? 'text' : 'password'} id="name" placeholder='ex : Jackpot777'/>
      <button onClick={togglePassword}></button>
    </div>
  )
}
