import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import nezuko from '../../images/nezuko.png'
import Addcart from '../../components/addcart'
import Link from 'next/link'

export default function Nezuko() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
					<Image src={nezuko} alt={'Kamado Nezuko costume'} width={250} height={250} />
	 					<h1 className={styles.product1}>Kamado Nezuko</h1>
						<div className={styles.prix1}>49.99&euro;</div>
          </article>
					<p className={styles.text3}><Link href='/nezukorun'><div className={styles.egg}>Nezuko Kamado</div></Link>is a Demon Slayer. She is a demon and the younger sister of Tanjiro Kamado.<br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 