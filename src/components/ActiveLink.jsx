/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, href, name }) => {
  const router = useRouter();
  const style =
    router.pathname === href
      ? 'variant: "links.activeNav"'
      : 'variant: "links.nav"';

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} sx={{ style }}>
      {children}
    </a>
  );
};

export default ActiveLink;
