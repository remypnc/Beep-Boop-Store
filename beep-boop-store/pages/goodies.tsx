import Card from '../components/card'
import Foot from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import kikoku from '../images/kikoku.png'
import sandai from '../images/sandai.png'
import shusui from '../images/shusui.png'
import wado from '../images/wado.png'
import pochita from '../images/pochita.png'
import akatsuki from '../images/akatsuki.png'
import mugd from '../images/mugd.png'
import Addcart from '../components/addcart'

export default function Goodies() {
  return (
    <>
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.box1}>
            <h2 className={styles.text}>Goodies</h2>
            <p className={styles.text2}>Some pop things that you must have !</p>
        </div>
      <div className={styles.article}>
      <section id='product' className={styles.fig}> 
       <article>
         <Link href="/products/pochita" >
           <Image src={pochita} alt={'peluche pochita'} width={250} height={250}/>
           <h1 className={styles.product}>Peluche Pochita</h1>
          <div className={styles.prix}>29.99&euro;</div></Link>
          <Addcart/>
         </article>

         <article>
          <Link href="/products/product">
           <Image src={sandai} alt={'replique sandai'} width={250} height={250}/>
           <h1 className={styles.product}>Katana Sandai</h1>
          <div className={styles.prix}>59.00&euro;</div></Link>
          <Addcart/>
         </article>

         <article>
          <Link href="/products/product">
          <Image src={shusui} alt={'replique shusui'} width={250} height={250}/>
          <h1 className={styles.product}>Katana Shusui</h1>
         <div className={styles.prix}>59.00&euro;</div></Link>
          <Addcart/>
         </article>
         
         <article>
          <Link href="/products/product">
          <Image src={wado} alt={'replique wado'} width={250} height={250}/>
          <h1 className={styles.product}>Katana Wado</h1>
         <div className={styles.prix}>69.00&euro;</div></Link>
          <Addcart/>
         </article>
      </section>
       <section id='product' className={styles.fig}>  
         <article>
          <Link href="/products/product">
           <Image src={akatsuki} alt={'porte-clé akatsuki'} width={250} height={250}/>
           <h1 className={styles.product}>Porte-clé Akatsuki</h1>
          <div className={styles.prix}>2.99&euro;</div></Link>
          <Addcart/>
         </article>

         <article>
          <Link href="/products/product">
          <Image src={mugd} alt={'replique shusui'} width={250} height={250}/>
          <h1 className={styles.product}>Mug DragonBall</h1>
         <div className={styles.prix}>9.90&euro;</div></Link>
          <Addcart/>
         </article>

         <article>
          <Link href="/products/product" >
           <Image src={kikoku} alt={'replique kikoku'} width={250} height={250}/>
           <h1 className={styles.product}>Katana Kikoku</h1>
          <div className={styles.prix}>69.00&euro;</div></Link>
          <Addcart/>
         </article>
       </section></div>
    </main>
     <Foot /></>
	)
}

