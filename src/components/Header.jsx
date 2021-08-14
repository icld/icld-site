/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { jsx, useColorMode, Button, Box, Flex } from 'theme-ui';

const navItems = [
  { name: 'projects', toHref: '/projects' },
  { name: 'about', toHref: '/about' },
  { name: 'blog', toHref: '/blog' },
  { name: 'contact', toHref: '/contact' },
];

const Header = (props) => {
  const router = useRouter();
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header sx={{ variant: 'header.header' }}>
      <nav sx={{ variant: 'header.navBar' }}>
        <Link href='/'>
          {router.pathname === '/' ? (
            <a sx={{ variant: 'links.icldActiveNav' }}>ICLD</a>
          ) : (
            <a sx={{ variant: 'links.icldNav' }}>ICLD</a>
          )}
        </Link>
        <div sx={{ display: 'flex' }}>
          {navItems.map((item, i) => (
            <Link href={item.toHref}>
              {router.pathname === item.toHref ? (
                <a sx={{ variant: 'links.activeNav' }}>{item.name} </a>
              ) : (
                <a sx={{ variant: 'links.nav' }}>{item.name} </a>
              )}
            </Link>
          ))}
          {/* <Button
            onClick={(e) => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}
          >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
