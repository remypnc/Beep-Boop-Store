import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import usopp from '../../images/usopp.jpg'
import Addcart from '../../components/addcart'

export default function Usopp() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
          <Image src={usopp} alt={'Green Usopp figurine'} width={250} height={280} />
             <h1 className={styles.product1}>Green Usopp</h1>
           <div className={styles.prix1}>249.90&euro;</div>
          </article>
          <p className={styles.text3}>Usopp is the sniper of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.<br /><br />
         Join the Straw Hats Pirates and become a crew mate to travel in search of One piece !<br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
}