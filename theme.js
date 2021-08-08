import { sketchy } from '@theme-ui/presets';

const theme = {
  ...sketchy,
  links: {
    nav: {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
  containers: {
    main: {
      width: '90%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
  },
  styles: {
    ...sketchy.styles,
  },
};

export default theme;
