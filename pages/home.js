import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
  let textName = "mother home";
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <h1>Surprise {textName}....</h1>        
      </main>
    </div>
  )
}

export default  Home;
