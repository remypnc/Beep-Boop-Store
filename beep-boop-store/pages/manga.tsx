import Head from 'next/head'
import Card from '../components/card'
import Foot from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import usopp from '../images/usopp.jpg'
import naruto from '../images/naruto.png'
import gojo from '../images/gojo.png'
import yuji from '../images/yuji.jpg'
import gojo2 from '../images/gojo2.jpg'
import luffy from '../images/luffy.png'
import goku from '../images/goku.png'
import tanjiro from'../images/tanjiro.png'
import Link from 'next/link'
import Addcart from '../components/addcart'

export default function Manga() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.box1}>
            <h2 className={styles.text}>Manga Figurines</h2>
            <p className={styles.text2}>All manga figurines you want are already here !</p>
        </div>
        <div className={styles.article}>
          <section id='product' className={styles.fig}>    
          <article>      
            <Link href="/products/usopp"> 
           <Image src={usopp} alt={'Green Usopp figurine'} width={250} height={280} />
             <h1 className={styles.product}>Green Usopp</h1>
           <div className={styles.prix}>249.90&euro;</div></Link>
           <Addcart/>
          </article> 

          <article>
          <Link href="/products/naruto"> 
           <Image src={naruto} alt={'Uzumaki Naruto figurine'} width={250} height={280} />
             <h1 className={styles.product}>Uzumaki Naruto</h1>
          <div className={styles.prix}>259.90&euro;</div></Link>
            <Addcart/>
          </article> 

          <article>     
          <Link href="/products/gojo">    
           <Image src={gojo} alt={'Satoru Gojo figurine'} width={250} height={280} />
             <h1 className={styles.product}>Satoru Gojo</h1>
           <div className={styles.prix}>249.90&euro;</div></Link>
           <Addcart/>
          </article> 

          <article>
          <Link href="/products/gojo2"> 
           <Image src={gojo2} alt={'Red Satoru Gojo figurine'} width={250} height={280} />
             <h1 className={styles.product}>Red Satoru Gojo</h1>
          <div className={styles.prix}>359.90&euro;</div></Link>
          <Addcart/>
          </article> 
         </section>
         <section id='product' className={styles.fig}>    
          <article>    
          <Link href="/products/luffy">     
           <Image src={luffy} alt={'Monkey D. Luffy figurine'} width={250} height={280} />
             <h1 className={styles.product}>Monkey D. Luffy</h1>
           <div className={styles.prix}>79.99&euro;</div></Link>
           <Addcart/>
          </article> 

          <article>
          <Link href="/products/tanjiro"> 
           <Image src={tanjiro} alt={'Kamado Tanjiro figurine'} width={250} height={280} />
             <h1 className={styles.product}>Kamado Tanjiro</h1>
          <div className={styles.prix}>129.99&euro;</div></Link>
          <Addcart/>
          </article> 
          
          <article>   
          <Link href="/products/goku">      
           <Image src={goku} alt={'Goku figurine'} width={250} height={280} />
             <h1 className={styles.product}>Goku SS</h1>
           <div className={styles.prix}>349.90&euro;</div></Link>
           <Addcart/>
          </article> 

          <article>
          <Link href="/products/yuji">
           <Image src={yuji} alt={'Naruto figurine'} width={250} height={280} />
             <h1 className={styles.product}>Itadori Yuji</h1>
          <div className={styles.prix}>129.99&euro;</div></Link>
          <Addcart/>
          </article> 
         </section>
        </div>
      </main>
     <Foot /></>
	)
}
