import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Foot from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'images/logo.jpg'

export default function Home() {
return (
  <>   
    <main className={styles.main}>
     <Navbar />	
      <div className={styles.title}>
        <h1 className={styles.top}>
          Welcome on the <Link href="/home"><Image className={styles.img} src={logo} alt={'logo'} width={280} height={67}/></Link>store !
        </h1>
        <div className={styles.boxmain}></div>
      </div>
    </main>
    <Foot />
    </>
  )
}
