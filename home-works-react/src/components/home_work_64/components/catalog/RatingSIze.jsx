import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import { memo, useCallback } from "react";

export const RatingSIze = memo((props) => {
  console.log("RatingSIze is rendering now");
  const { ratingHandler, ratingFilter } = props;

  const ratingChangeHandler = useCallback(({ target }) => {
    const ratingValue = parseFloat(target.value) * 20;
    ratingHandler(ratingValue);
  }, []);

  const ratingFilterUpdate = ratingFilter / 20;

  return (
    <Stack spacing={1}>
      <Rating
        onChange={ratingChangeHandler}
        name="size-medium"
        value={ratingFilterUpdate}
      />
    </Stack>
  );
});

RatingSIze.propTypes = {
  ratingHandler: PropTypes.func,
  ratingFilter: PropTypes.number,
};

RatingSIze.defaultProps = {
  ratingFilter: null,
};
