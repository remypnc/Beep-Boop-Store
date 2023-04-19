import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import usopp from '../../images/usopp.jpg'
import Addcart from '../../components/addcart'

export default function Product() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
          <Image src={usopp} alt={'Green Usopp figurine'} width={250} height={250} />
             <h1 className={styles.product1}>Green Usopp</h1>
           <div className={styles.prix1}>249.90&euro;</div>
          </article>
          <p className={styles.text3}><br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
}