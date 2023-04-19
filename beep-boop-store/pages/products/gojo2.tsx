import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import gojo2 from '../../images/gojo2.jpg'
import Addcart from '../../components/addcart'

export default function Home() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
          <Image src={gojo2} alt={'Red Satoru Gojo figurine'} width={250} height={280} />
             <h1 className={styles.product1}>Red Satoru Gojo</h1>
          <div className={styles.prix1}>359.90&euro;</div>
          </article>
          <p className={styles.text3}>Satoru Gojo is one of the main protagonists of Jujutsu Kaisen ! <br /><br />
           He is widely recognized as the strongest in the world !<br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 