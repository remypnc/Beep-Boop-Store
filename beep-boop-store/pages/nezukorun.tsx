import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Foot from '../components/footer'
import Image from 'next/image'
import nezukorun from '../images/nezukorun.gif'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Card from '../components/card'
  
export default function Natsu() {
return (
  <>
		<main className={styles.main}>
			<Navbar />
				<div className={styles.easter}>
        	<article className={styles.fig}>
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
					</article>
				</div>
			<Popup trigger={<button> Click here</button>} position="bottom center">Ohayo ! Nezuko-chan !😍 </Popup>
			<div className={styles.easter}>
        	<article className={styles.fig}>
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
					</article>
				</div>
			<Popup trigger={<button> Click here</button>} position="bottom center">Ohayo ! Nezuko-chan !😍 </Popup>
			<div className={styles.easter}>
        	<article className={styles.fig}>
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
						<Image src={nezukorun} alt={'Nezuko chaaaaan !!!'} width={250} height={280} />
					</article>
				</div>
		</main>
	<Foot /></>
  )
} 