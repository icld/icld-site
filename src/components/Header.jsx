import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default () => (
  <>
    <div>
      <Link href='/'>
        <a>ICLD</a>
      </Link>

      <Link href='/about'>
        <a>ABOUT</a>
      </Link>

      <Link href='/projects'>
        <a>PROJECTS</a>
      </Link>

      <Link href='/blog'>
        <a>BLOG</a>
      </Link>

      <Link href='/lx'>
        <a>LX</a>
      </Link>

      <Link href='/contact'>
        <a>CONTACT</a>
      </Link>
    </div>
  </>
);
