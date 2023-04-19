import Head from 'next/head'
import Card from '../components/card'
import Foot from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Pay() {
  return (
    <>  
  <main className={styles.main}>
    <Navbar />
		<div className={styles.box}>
			<div className={styles.text}>
				<h1>Pay here by card </h1>
				<br /><br /><br />
				 <label htmlFor="pay">Credit card :&ensp;</label>
					<input className={styles.input} type="pay" name="pay" placeholder='__ __ __ __ &ensp;__ __ __ __ &ensp;__ __ __ __ &ensp;__ __ __ __' /><br /><br />
						<div className={styles.boxi}>
						 <label htmlFor="SVG">SVG&ensp;:&ensp;</label>
						 <input className={styles.input} type="text" placeholder=' _ _ _ ' />&ensp;&ensp;
						 <label htmlFor="year">Year&ensp;:&ensp;</label>
						 <input className={styles.input} type="text" placeholder='  -- / --  ' />
						</div>			
				</div>
			</div>
		<div className={styles.box3}></div>
		</main>
		<Foot /></>
	)
}