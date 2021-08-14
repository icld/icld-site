/** @jsxRuntime classic */
/** @jsx jsx */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { jsx } from 'theme-ui';

import Header from '../src/Components/Header';

export default function Home() {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <Head>
        <title>ICLD.io</title>
        <meta name='description' content='icld' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Image
          src='/images/_DSF5585.JPG'
          priority={true}
          loading='eager'
          // quality='10'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          sx={{ position: 'relative', zIndex: -1 }}
        />
        <h1>Welcome to icld.io</h1>

        <p>Hello! I am a Portland, Oregon based freelancer.</p>

        <div></div>
      </main>
    </div>
  );
}
