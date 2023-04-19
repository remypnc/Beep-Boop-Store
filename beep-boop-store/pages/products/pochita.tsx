import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import pochita from '../../images/pochita.png'
import Addcart from '../../components/addcart'

export default function Pochita() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
        <Image src={pochita} alt={'Pochita'} width={250} height={280} />
             <h1 className={styles.product1}>Pochita</h1>
          <div className={styles.prix1}>29.99&euro;</div>
          </article>
					<p className={styles.text3}><br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 