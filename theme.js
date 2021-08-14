import { sketchy } from '@theme-ui/presets';

const theme = {
  ...sketchy,

  initialColorModeName: 'light',
  // colors: {
  //   text: 'white',
  // },

  containers: {
    main: {
      width: '90%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
      color: 'black',
    },
    page: {
      display: 'flex',
      justifyContent: 'center',
      m: 0,
      mx: 'auto',
    },
  },

  links: {
    nav: {
      color: 'white',
      textDecoration: 'none',
      padding: '14px 16px',
      cursor: 'pointer',
      zIndex: 1,
      fontSize: '18px',
      textTransform: 'capitalize',

      modes: {
        dark: {
          color: 'black',
        },
      },
    },
    activeNav: {
      variant: 'links.nav',
      color: 'primary',
    },
    icldNav: {
      variant: 'links.nav',
      // float: 'left',
    },
    icldActiveNav: {
      variant: 'links.activeNav',
    },
  },

  header: {
    header: {
      height: '60px',
      width: '100vw',
      backgroundColor: 'rgba(0,0,0,0.75)',

      borderColor: 'rgba(255,0,0,0.15)',
      zIndex: 1,
    },
    navBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      variant: 'containers.main',
      height: '100%',
      zIndex: 1,
    },
  },

  styles: {
    ...sketchy.styles,
  },
};

export default theme;
