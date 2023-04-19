import type { NextPage }  from 'next'
import { useEffect, usetate } from 'react'
import card from '../components/card'
import { fetchUserData } from '../../sercvices/Users/UserService'

 const Test : NextPage = () => {
    const [cardIsVisible, setCardIsVisible] = useState(true)
   
    const handleOnchange = () => {
      setCardIsVisible(!cardIsVisible)
    }

    useEffect(() =>{
      fetchUserData()
    })

    return (
      <div>
         {cardIsVisible && <Card title="titre" />}

         <button onClick={handle Onchange}>Supprimer la card</button>
      </div>
    )
    
 }


 export default text