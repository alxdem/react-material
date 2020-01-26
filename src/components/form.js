import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const AppForm = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 300,
        background: '#fff'
      },
    },
  }));

  const classes = useStyles();

  return(
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="Расстояние"
          variant="filled"
          fullWidth={true}
          placeholder='89119082233'
          disabled={false}
          required={true}
          error={true}
          // defaultValue='400'
        />

        <TextField
          id="filled-basic2"
          label="Рост"
          variant="filled"
        />
      </form>
    </>
  )
}