import React from "react";
import { AppBar, Toolbar, Typography, Divider } from "@material-ui/core";

import Papers from "./Papers";
import Cards from "./Cards";
import CardDemo from "./CardDemo.js";

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h2" variant="h4">
            Material UI Papers & Cards
          </Typography>
        </Toolbar>
      </AppBar>

      <br />

      <Papers />

      <br />

      <Divider />

      <br />

      <Cards />

      <br />

      <Divider />

      <br />

      <CardDemo></CardDemo>

    </>
  );
}
