/** @jsxRuntime classic */
/** @jsx jsx */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { jsx } from 'theme-ui';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ICLD.io</title>
        <meta name='description' content='icld' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to icld.io</h1>

        <p className={styles.description}>
          Hello! I am a Portland, Oregon based freelancer.
        </p>

        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
