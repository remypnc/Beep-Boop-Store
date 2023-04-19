import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import natsu from '../../images/natsu.png'
import Addcart from '../../components/addcart'

export default function Natsu() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
					<Image src={natsu} alt={'Natsu Dragneel figurine'} width={250} height={280} />
	 					<h1 className={styles.product1}>Natsu Dragneel</h1>
						<div className={styles.prix1}>24.99&euro;</div>
          </article>
					<p className={styles.text3}>Natsu is a Fire Mage and the main character of Fairy Tail at the same time.<br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 
