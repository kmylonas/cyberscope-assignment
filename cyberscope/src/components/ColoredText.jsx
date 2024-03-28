import { Typography, Stack } from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ColoredText = (props) => {
  const { text } = props;

  if (parseFloat(text) >= 0) {
    return (
      <Stack direction="row" justifyContent="center">
        <ArrowDropUpIcon color="success" />
        <Typography sx={{ color: "success.main" }}>{text}%</Typography>
      </Stack>
    );
  }

  return (
    <>
      <Stack direction="row" justifyContent="center">
        <ArrowDropDownIcon color="error" />
        <Typography sx={{ color: "error.main" }}>{Math.abs(text)}%</Typography>
      </Stack>
    </>
  );
};

export default ColoredText;
