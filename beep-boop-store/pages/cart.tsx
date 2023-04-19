import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/card'
import Foot from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Cart() {
  return (
    <>
		<main className={styles.main}>
		<Navbar />
		<div className={styles.box0}>
			<Link href="/pay">
				<button className={styles.button} type="button" name="addtocart">
				<span >Purchase</span></button></Link>
			</div>
		<div className={styles.box3}></div>
	</main>
		<Foot /></>
	)
}