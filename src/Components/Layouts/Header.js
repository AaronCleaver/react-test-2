import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Exercise Database
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);
