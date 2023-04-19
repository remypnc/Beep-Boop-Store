import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Beep Boop Store</title>
        <link rel="icon" href="logo1.ico" />
      </Head>

     <main className={styles.main}>
        <h1 className="main-title">
          Welcome to <a href="home">the Beep Boop Store !</a>
        </h1>

      <body>
        <div className={styles.grid}>
          <a href="manga" className={styles.card}>
            <h2>Manga Figurines  &rarr;</h2>
            <p>Pop figurines you must want !</p>
          </a>

          <a href="pop" className={styles.card}>
            <h2>Clothes &rarr;</h2>
            <p>Go wear something !</p>
          </a>

          <a href="goodies"className={styles.card}>
            <h2>Goodies &rarr;</h2>
            <p>Some pop things to have !</p>
          </a>

          <a href="customs"className={styles.card}>
             <h2>Custom &rarr;</h2>
             <p>Custom your own products !</p>
          </a>
        </div>
       </body>
     </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel=""
        >
          Copyright © 2022 by Beep Boop Store® <a href="https://beepboopstore.com/"><strong>Beep Boop Store</strong></a>
            <link rel="icon" href="logo1.ico" />
        </a>
      </footer>
    </>
  )
}
