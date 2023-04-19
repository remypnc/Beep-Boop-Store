import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import tengen from '../../images/tengen.png'
import Addcart from '../../components/addcart'

export default function Tengen() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
        <Image src={tengen} alt={'Tengen Uzui costume'} width={250} height={250} />
             <h1 className={styles.product1}>Tengen Uzui</h1>
          <div className={styles.prix1}>49.99&euro;</div>
          </article>
          <p className={styles.text3}>Tengen Uzui is a major character of Demon Slayer and he was a former member of the Demon Slayer Corps!<br /><br /><Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 