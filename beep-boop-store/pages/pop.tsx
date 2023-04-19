import Foot from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import shanks from '../images/shanks.png'
import pnaruto from '../images/pnaruto.png'
import gotenks from '../images/gotenks.png'
import natsu from '../images/natsu.png'
import reiner from '../images/reiner.png'
import levipop from '../images/levipop.png'
import armin from '../images/armin.png'
import allmight from '../images/allmight.png'
import Link from 'next/link'
import Addcart from '../components/addcart'

export default function Pop() {
  return (
    <>   
  <main className={styles.main}>
    <Navbar />
    <div className={styles.box1}>
          <h2 className={styles.text}>Pop figurines</h2>
          <p className={styles.text2}>Some pop figurines you must have !</p>
        </div>
        <div className={styles.article}><section id='product' className={styles.fig}>    
          <article>   
            <Link href="/products/product">    
           <Image src={shanks} alt={'Shanks pop figurine'} width={250} height={280} />
             <h1 className={styles.product}>Shanks</h1>
           <div className={styles.prix}>19.99&euro;</div></Link> 
           <Addcart/>
          </article> 

          <article>
          <Link href="/products/product">
           <Image src={pnaruto} alt={'Naruto pop figurine'} width={250} height={280} />
             <h1 className={styles.product}>Naruto</h1>
          <div className={styles.prix}>19.99&euro;</div></Link>
          <Addcart/>
          </article> 

          <article>        
          <Link href="/products/product">
           <Image src={gotenks} alt={'Gotenks pop figurine'} width={250} height={280} />
             <h1 className={styles.product}>Gotenks SSJ3</h1> 
           <div className={styles.prix}>19.99&euro;</div></Link>
           <Addcart/>
          </article> 

          <article>
          <Link href="/products/natsu">
           <Image src={natsu} alt={'Natsu pop figurine'} width={250} height={280} />
             <h1 className={styles.product}>Natsu</h1>
          <div className={styles.prix}>24.99&euro;</div></Link>
          <Addcart/>
          </article> 
         </section>
         <section id='product' className={styles.fig}>    
          <article>       
          <Link href="/products/product"> 
           <Image src={allmight} alt={'All might pop figurine'} width={250} height={280} />
             <h1 className={styles.product}>All Migth</h1>
           <div className={styles.prix}>14.99&euro;</div></Link>
           <Addcart/>
          </article> 

          <article>
          <Link href="/products/product">
           <Image src={reiner} alt={'Reiner pop figurine'} width={250} height={280} />
             <h1 className={styles.product}>Reiner</h1>
          <div className={styles.prix}>24.99&euro;</div></Link>
          <Addcart/>
          </article> 
          
          <article>        
          <Link href="/products/product">
           <Image src={armin} alt={'Armin pop figurine'} width={250} height={280} />
             <h1 className={styles.product}>Armin</h1>
           <div className={styles.prix}>14.99&euro;</div></Link>
           <Addcart/>
          </article> 

          <article>
          <Link href="/products/levi">
           <Image src={levipop} alt={'Levi pop figurine'} width={250} height={280} />
             <h1 className={styles.product}>Levi</h1>
          <div className={styles.prix}>15.99&euro;</div></Link>
          <Addcart/>
          </article>
        </section>
       </div>
    </main>
	 <Foot /></>
	)
}

				