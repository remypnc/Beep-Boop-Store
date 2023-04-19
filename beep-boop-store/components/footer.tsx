import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import pay from 'images/pay.png'

const foot = () => {
	return (
	<footer className={styles.footer}>
		Copyright © 2022 by Beep Boop Store® <Link href="/home"><strong>Beep Boop Store</strong></Link>
		<Link href="/pay">
		 <Image src={pay} alt={'safecard'} width={180} height={40} />
		</Link>
	</footer>
	)
}

export default foot