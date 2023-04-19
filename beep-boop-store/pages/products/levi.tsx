import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import levi from '../../images/levipop.png'
import Addcart from '../../components/addcart'

export default function Home() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
           <Image src={levi} alt={'Levi Pop figurine'} width={250} height={280} />
             <h1 className={styles.product1}>Levi</h1>
           <div className={styles.prix1}>15.50&euro;</div>
          </article>
          <p className={styles.text3}><br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 