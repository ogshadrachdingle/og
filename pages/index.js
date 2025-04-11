import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShadGPT – OGSD Hub</title>
        <meta name="description" content="The home of OGShadrachDingle, Epic Partner and Spotify Artist" />
      </Head>

      <header className={styles.header}>
        <img src="/images/shadgpt-logo.jpg" alt="ShadGPT Logo" className={styles.logo} />
        <h1>ShadGPT – The Home of OGShadrachDingle</h1>
      </header>

      <nav className={styles.socials}>
        <a href="#"><img src="/images/icon-tiktok.svg" alt="TikTok" /></a>
        <a href="#"><img src="/images/icon-instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="/images/icon-youtube.svg" alt="YouTube" /></a>
        <a href="#"><img src="/images/icon-twitter.svg" alt="Twitter" /></a>
        <a href="#"><img src="/images/icon-spotify.svg" alt="Spotify" /></a>
      </nav>

      <main className={styles.main}>
        <section>
          <h2>Featured Maps</h2>
          <p>Full map gallery coming in next version</p>
        </section>
      </main>

      <div className={styles.chatbot}>
        <h3>Ask ShadGPT</h3>
        <input type="text" placeholder="Ask owt in Yorkshire/Derbyshire..." />
        <button>Send</button>
      </div>

      <footer className={styles.footer}>
        <img src="/images/ogsd-gamer-logo.jpg" alt="OGSD Logo" />
        <p>© OGSD – All Rights Reserved</p>
      </footer>
    </div>
  )
}