import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import luffy from '../../images/luffy.png'
import Addcart from '../../components/addcart'

export default function Luffy() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
        <Image src={luffy} alt={'Monkey D. Luffy figurine'} width={250} height={280} />
             <h1 className={styles.product1}>Monkey D. Luffy</h1>
           <div className={styles.prix1}>79.99&euro;</div>
          </article>
          <p className={styles.text3}>Monkey D. Luffy is the founder and captain of the powerful Straw Hat Pirates in One Piece. <br /><br />
           Join the Straw Hats Pirates and become a crew mate to travel in search of One piece !<br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 