import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import naruto from '../../images/naruto.png'
import Addcart from '../../components/addcart'

export default function Naruto() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
					<Image src={naruto} alt={'Uzumaki Naruto figurine'} width={250} height={280} />
	 					<h1 className={styles.product1}>Uzumaki Naruto</h1>
						<div className={styles.prix1}>259.90&euro;</div>
          </article>
					<p className={styles.text3}><br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 