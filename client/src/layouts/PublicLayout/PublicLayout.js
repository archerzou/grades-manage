import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Navbar, Footer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.common.white,
    height: '100%'
  },
  main: { marginTop: 80, padding: theme.spacing(4) }
}));

function PublicLayout(props) {
  const classes = useStyles(props);
  const { children, withFooter = true } = props;
  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.main}>{children}</main>
      {withFooter && <Footer />}
    </div>
  );
}

export default PublicLayout;
