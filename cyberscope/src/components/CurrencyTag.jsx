import React from "react";
import { Stack, Typography } from "@mui/material";
import { capitalize } from "lodash";

const CurrencyTag = (props) => {
  const { image, name, symbol } = props;

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <img src={image} alt="Image.." width="25px" height="25px" />
      <Typography variant="h6" fontWeight={400} noWrap>
        {capitalize(name)}
      </Typography>
      <Typography variant="body2" fontWeight={400} color="#808A9D">
        {symbol && symbol.toUpperCase()}
      </Typography>
    </Stack>
  );
};

export default CurrencyTag;
