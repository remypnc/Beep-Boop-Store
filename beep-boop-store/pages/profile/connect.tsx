import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import Foot from '../../components/footer'
import Card from '../../components/card'

export default function Home() {
return (
  <>   
     <main className={styles.main} id="connect">
      <Navbar />	
      <div className={styles.box3}>
		  	<div className={styles.text}>
          <Card />
		  	</div>
		  </div>
    </main>
      <Foot />
    </>
  )
}