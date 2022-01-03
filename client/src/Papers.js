import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <>
      <Typography componet="h2" variant="h5" gutterBottom>
        Pages
      </Typography>

      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" color="primary" gutterBottom>
          Plus
        </Typography>
        <Typography variant="body1">$3,000</Typography>
      </Paper>
      <br />
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h6" color="secondary" gutterBottom>
          Minus
        </Typography>
        <Typography variant="body1">$2,400</Typography>
      </Paper>
    </>
  );
};
