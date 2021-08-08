/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link';
import { Link as linky } from 'theme-ui';
import { Flex } from 'theme-ui';
// import styles from '../../styles/Home.module.css';
import { jsx } from 'theme-ui';

const Nav = (props) => (
  <div
    sx={{
      height: '60px',
      width: '100vw',
      bg: 'background',
      borderBottom: '1px solid',
      borderColor: 'primary',
    }}
  >
    <nav
      sx={{
        width: '90%',
        maxWidth: '960px',
        m: 'auto',

        display: 'Flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%',
      }}
    >
      <Link href='/'>
        <linky sx={{ variant: 'links.nav' }}>ICLD</linky>
      </Link>
      <Link href='/about'>
        <a sx={{ variant: 'links.nav' }}>ABOUT</a>
      </Link>

      <Link href='/projects'>
        <a sx={{ variant: 'links.nav' }}>PROJECTS</a>
      </Link>

      <Link href='/blog'>
        <a sx={{ variant: 'links.nav' }}>BLOG</a>
      </Link>

      <Link href='/lx'>
        <a sx={{ variant: 'links.nav' }}>LX</a>
      </Link>

      <Link href='/contact'>
        <a sx={{ variant: 'links.nav' }}>CONTACT</a>
      </Link>
    </nav>
  </div>
);

export default Nav;
