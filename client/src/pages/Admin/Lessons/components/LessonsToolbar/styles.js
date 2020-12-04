export default theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    justifyContent: 'space-between'
  },
  deleteButton: {
    color: theme.palette.danger.main,
    marginRight: theme.spacing(1)
  },
  updateButton: {
    color: theme.palette.custom.primary,
    borderColor: theme.palette.custom.primary,
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  roleField: {
    marginRight: 'auto',
    marginLeft: theme.spacing(1),
    maxWidth: '200px'
  }
});
