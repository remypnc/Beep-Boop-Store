import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Image from 'next/image'
import yuji from '../../images/yuji.jpg'
import Addcart from '../../components/addcart'

export default function Yuji() {
return (
  <>   
    <main className={styles.main}>
      <Navbar />	
      <div className={styles.boxe}>
		  	<div>
        <article>      
        <Image src={yuji} alt={'Itadori Yuji figurine'} width={250} height={280} />
             <h1 className={styles.product1}>Itadori Yuji</h1>
          <div className={styles.prix1}>129.99&euro;</div>
          </article>
          <p className={styles.text3}><br /> <Addcart /></p>
		  	</div>
		  </div>
    </main>
    <Foot />
    </>
  )
} 