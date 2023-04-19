import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import tanjiro from '../../images/tanjiro.png'
import Addcart from '../../components/addcart'
import Link from 'next/link'

export default function Tanjiro() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
        <Image src={tanjiro} alt={'tanjiro'} width={250} height={280} />
             <h1 className={styles.product1}>Kamado Tanjiro</h1>
          <div className={styles.prix1}>129.99&euro;</div>
          </article>
          <p className={styles.text3}>Tanjiro Kamado is a Demon Slayer ! He is accompanied by his sister : <Link href='/nezukorun'><div className={styles.egg}>Nezuko-chan !</div></Link><br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 