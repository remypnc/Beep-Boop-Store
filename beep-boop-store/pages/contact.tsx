import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import pay from '../images/pay.png'
import Card from '../components/card'
import Head from 'next/head'

export default function Contact() {
  return (
    <>		
		<main className={styles.main} id="contact">
		<Navbar />
		<div className={styles.box}>
			<div className={styles.text}>
				<h1>How to contact us ?</h1>
				<br />
				<p>💬Connect with me on :</p><br />
				<Link href="https://www.linkedin.com/in/r%C3%A9my-penichon-7a5bab252/" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="rémy penichon" height="30" width="40" /></Link>
				<Link href="https://instagram.com/remy_pnc" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="remy_pnc" height="30" width="40" /></Link>
				<Link href="https://discord.gg/Garok1812#3365" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="Garok1812#3365" height="40" width="40" /></Link>
			</div>
		</div>
		<div className={styles.box3}></div>
		</main>
	<footer className={styles.footer}>
		This project was made by Rémy PENICHON and Reginor RINCLA.|	Copyright © 2022 by Beep Boop Store® <Link href="https://beepboopstore.com/"><strong>Beep Boop Store</strong></Link>
		<Link href="/pay">
		 <Image src={pay} alt={'safecard payment'} width={180} height={40} />
		</Link>
	</footer></>
	)
}