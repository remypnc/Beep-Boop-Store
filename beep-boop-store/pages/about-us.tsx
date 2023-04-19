import Head from 'next/head'
import Card from '../components/card'
import Foot from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import attack from '../images/attack.png'
import dbz from '../images/dbz.png'
import demon from '../images/demon.png'
import jjkaisen from '../images/jjkaisen.png'
import narutol from '../images/narutol.png'
import onepiece from '../images/onepiece.png'

export default function About() {
  return (
    <>		
	<main className={styles.main} id="aboutus">
		<Navbar />
		<div className={styles.box}>
			<div>
			<p className={styles.text}>Welcome on our e-commerce website of Pop Culture !</p></div><br />
				<p className={styles.text2}>We are 2 students who work on this project : <br /><br />
				<strong> Create a website to sell something. </strong><br /><br />
				We are beginners so please be gentle ;)
		  	<br /><br /><br />
				If you have some ideas to help us to increase the site, don't hesitate to tell us !</p>
			</div>
			<div className={styles.box0}>
			<p className={styles.texta}>Our Partners</p>
			<div>
				<div className={styles.fig}>
					<Image src={demon} alt={'Demon Slayer'} width={200} height={140}/>
					<Image src={narutol} alt={'Naruto'} width={170} height={70}/>
					<Image src={dbz} alt={'Dragon Ball Z'} width={180} height={180}/>
				</div>
				<div className={styles.fig1}>
					<Image src={onepiece} alt={'One Piece'} width={180} height={180}/>
					<Image src={jjkaisen} alt={'Jujutsu Kaisen'} width={170} height={70}/>
					<Image src={attack} alt={'Attack of Titans'} width={100} height={130}/>
				</div>
			</div>
			</div>
		</main>
		<Foot /></>
	)
}
