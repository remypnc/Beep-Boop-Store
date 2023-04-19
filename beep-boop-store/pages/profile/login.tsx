import Head from 'next/head'
import Card from '../../components/card'
import Foot from '../../components/footer'
import Navbar from '../../components/navbar'
import styles from '../../styles/Home.module.css'
import Password from '../../components/password'
import Link from 'next/link'

export default function Login() {
  return ( 
   <>
 <main className={styles.main} id="connect">
    <Navbar />
      <div className={styles.boxe}>
       <div><br />
        <h2 className={styles.part}> Login</h2>
         <br /><br /><br />
         <form action="/profile/connect" method="post">
             <div>
              <br />
              <label htmlFor="name">Username : </label>
              <input required type="text" id="name" name="user_name" placeholder='ex : m_jack77' />
             </div>
           <br /><Password />
           <br /><Card /><Card />
           <button className={styles.button}><span><Link href='/profile/connect'>Enter</Link></span></button>
          </form>
          <div className={styles.text1}><Link href='/profile/register'>You don't have account ? Create here !</Link></div>
         </div>
      </div>
     </main>
    <Foot /></>
  )
}

