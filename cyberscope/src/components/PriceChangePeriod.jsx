import React from "react";

import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const PriceChangePeriod = (props) => {
  const TinyToggleButton = styled(ToggleButton)(() => ({
    height: "2.5rem",
    width: "2.5rem",
  }));

  const { onPeriodChange, period } = props;

  return (
    <ToggleButtonGroup
      value={period}
      exclusive
      onChange={onPeriodChange}
      aria-label="text alignment"
    >
      <TinyToggleButton value="24h" aria-label="left aligned">
        <Typography variant="body">24h</Typography>
      </TinyToggleButton>
      <TinyToggleButton value="7d" aria-label="centered">
        <Typography variant="body">7d</Typography>
      </TinyToggleButton>
      <TinyToggleButton value="14d" aria-label="right aligned">
        <Typography variant="body">14d</Typography>
      </TinyToggleButton>
      <TinyToggleButton value="1m" aria-label="justified">
        <Typography variant="body">1m</Typography>
      </TinyToggleButton>
      <TinyToggleButton value="2m" aria-label="justified">
        <Typography variant="body">2m</Typography>
      </TinyToggleButton>
      <TinyToggleButton value="200d" aria-label="justified">
        <Typography variant="body">200d</Typography>
      </TinyToggleButton>
      <TinyToggleButton value="1y" aria-label="justified">
        <Typography variant="body">1y</Typography>
      </TinyToggleButton>
    </ToggleButtonGroup>
  );
};

export default PriceChangePeriod;
