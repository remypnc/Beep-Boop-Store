import Head from 'next/head'
import Card from '../../components/card'
import Foot from '../../components/footer'
import Navbar from '../../components/navbar'
import styles from '../../styles/Home.module.css'
import Password from '../../components/password'
import Link from 'next/link'

export default function Register() {
  return ( 
   <>
 <main className={styles.main} id="connect">
    <Navbar />
       <div className={styles.box2}>
				<br />
         <h2 className={styles.part}>Register</h2>
         <Card />
         <form action="/profile/connect" method="post">
            <div><br />
             <div className={styles.box4}>
						  <label htmlFor="name">Firstname : </label>
              <input required type="text" id="name" name="first_name" placeholder='ex : Michael'/><br />
              <label htmlFor="name">Lastname : </label>
              <input required type="text" id="name" name="last_name" placeholder='ex : Jackson' /></div><br /><br />
              <label htmlFor="name">Username : </label>
              <input className={styles.input} required type="text" id="name" name="user_name" placeholder='ex : m_jack77' /><br /><br />
              <label htmlFor="mail">E-mail : &ensp;&ensp;&ensp;</label>
              <input className={styles.input} required type="email" id="name" name="e-mail" placeholder='ex : m_jacksondu77@gmail.com'/>
              <Card />
             <div className={styles.box4}><Password /><br /><Password /><Card /></div>
            </div>
            <button className={styles.button}><span><Link href='/profile/connect'>Create</Link></span></button>
          </form>
          
          <div className={styles.text1}><Link href='/profile/login'>You already have an account ? Connect here !</Link></div>
       </div>
     </main>
    <Foot /></>
  )
}