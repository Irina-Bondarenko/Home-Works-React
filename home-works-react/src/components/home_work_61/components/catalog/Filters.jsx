import * as React from "react";
import TextField from "@mui/material/TextField";

import "./css/filter.css";

class Filters extends React.Component {

  render() {
    return (
      <div className="searching-filter">
        <TextField id="outlined-search" label="Search field" type="search" />
      </div>
    );
  }
}

export { Filters };
