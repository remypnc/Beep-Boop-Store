import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import profile from 'images/profile.png'
import cart from 'images/cart.png'
import logo from 'images/logo.jpg'
import Head from 'next/head'

const navbar = () => {
	return (
		<div>
	<Head>
    	<title>Beep Boop Store</title>
    	<link rel="icon" href="logo1.ico" />
    </Head>
		
       <nav className={styles.achat}>
          <Link href="/home">
            <Image src={logo} alt={'logo'} width={215} height={50} />
          </Link>
         
					<div>   
          <header className={styles.roll}>
          <nav className={styles.rollbar}>
            <ul>
              <li className={styles.defile}><a>Figurines ⏷</a>
                <ul className={styles.unrollbar}>
                 <Link href="/manga">Manga Figurines ⏷</Link>
						<Link href="/pop">Pop figurines ⏷</Link>
							</ul>
						</li>
						<li>
							<Link href="/clothes">Clothes ⏷</Link>
						</li>
						<li>
							<Link href="/goodies">Goodies⏷</Link>
						</li>
						<li>
							<Link href="/about-us">About us ⏷</Link>
						</li>
						<li>
							<Link href="/contact">Contact ⏷</Link>
						</li>
					</ul>
				</nav>
			 </header>
			 </div>
				<div className={styles.logo}>
					<Link href="/profile/login" >
						<Image src={profile} alt={'profile'} width={40} height={40} />
					</Link>
					
					<Link href="/cart" >
						<Image src={cart} alt={'cart'} width={40} height={40}/>    
					</Link>
				</div>
		 </nav>
	 </div>
	) 
}

export default navbar