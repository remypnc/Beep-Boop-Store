import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import goku from '../../images/goku.png'
import Addcart from '../../components/addcart'

export default function Home() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
        <Image src={goku} alt={'Goku figurine'} width={250} height={280} />
             <h1 className={styles.product1}>Goku SS</h1>
           <div className={styles.prix1}>349.90&euro;</div>
          </article>
          <p className={styles.text3}><br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 