export default theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.borderShadow}`,
    boxShadow: `0 0 35px 0  ${theme.palette.borderShadow}`,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    height: 60,
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%',
    paddingLeft: 0
  },
  brandWrapper: {
    background: theme.palette.custom.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '271px',
    height: 60,
    flexShrink: 0
  },
  logo: {
    maxWidth: '100%',
    margin: 'auto',
    fontFamily: 'Montserrat,sans-serif',
    fontSize: '22px',
    fontWeight: 700,
    letterSpacing: 3,
    color: theme.palette.custom.contrastText
  },
  title: {
    marginLeft: theme.spacing(3),
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: '14px',
    color: theme.palette.contrastText
  },
  menuButton: {
    color: theme.palette.custom.contrastText,
    marginLeft: '-4px'
  },
  themeToggler: {
    marginLeft: 'auto'
  },
  notificationsButton: {
    margin: theme.spacing(0, 1)
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  [theme.breakpoints.down('sm')]: {
    brandWrapper: { width: 75 },
    logo: { display: 'none' }
  }
});
