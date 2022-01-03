import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography
} from "@material-ui/core";

export default () => (
  <>
    <Typography componet="h2" variant="h5" gutterBottom>
      Cards
    </Typography>

    <Card elevation={5}>
      <CardHeader title="Title" />
      <CardContent>
        <Typography variant="body1" component="p">
          Please enter something. <br />
        </Typography>
        <TextField label="content" />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          button
        </Button>
      </CardActions>
    </Card>
  </>
);
