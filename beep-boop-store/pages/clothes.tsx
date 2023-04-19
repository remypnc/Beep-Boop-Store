import Card from '../components/card'
import Foot from '../components/footer'
import Navbar from '../components/navbar'
import Image from 'next/image'
import tengen from '../images/tengen.png'
import bleach from '../images/bleach.png'
import nezuko from '../images/nezuko.png'
import obito from '../images/obito.png'
import gaara from '../images/gaara.png'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Addcart from '../components/addcart'

export default function Clothes() {
  return (
    <> 
  <main className={styles.main}>
    <Navbar />
     <div className={styles.box1}>
       <h2 className={styles.text}>Clothes</h2>
       <p className={styles.text2}>Find your products here !</p>
     </div>
    <div className={styles.article}>
      <section id='product'className={styles.fig}>
        <article>
          <Link href="/products/tengen">
           <Image src={tengen} alt={'Tengen Uzui costume'} width={250} height={250}/>
           <h1 className={styles.product}>Tengen Uzui</h1>
          <div className={styles.prix}>49.00&euro;</div></Link>
          <Addcart/>
         </article>

         <article>
          <Link href="/products/nezuko">
           <Image src={nezuko} alt={'costume nesuko'} width={250} height={250}/>
           <h1 className={styles.product}>Kamado Nezuko</h1>
          <div className={styles.prix}>49.99&euro;</div></Link>
          <Addcart/>
         </article>

         <article>
          <Link href="/products/product">
           <Image src={bleach} alt={'costume Capitaine'} width={250} height={250}/>
           <h1 className={styles.product}>Bleach</h1>
          <div className={styles.prix}>39.00&euro;</div></Link>
          <Addcart/>
         </article>

         <article>
          <Link href="/products/product">
           <Image src={gaara} alt={'costume gaara'} width={250} height={250}/>
           <h1 className={styles.product}>Gaara</h1>
          <div className={styles.prix}>49.00&euro;</div></Link>
          <Addcart/>
         </article>
        </section>
        <section id='product'className={styles.fig}>
         <article>
          <Link href="/products/product">
           <Image src={obito} alt={'costume obito'} width={250} height={250}/>
           <h1 className={styles.product}>Obito</h1>
          <div className={styles.prix}>49.00&euro;</div></Link>
          <Addcart/>
         </article>
        </section>
     </div>
    </main>	  
  <Foot /></>
	)
}
				
