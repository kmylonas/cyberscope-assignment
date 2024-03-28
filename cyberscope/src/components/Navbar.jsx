import { TextField, Stack, InputAdornment, Typography, Switch } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = (props) => {
  const { onChangeMode } = props;
  return (
    <>
      <Stack direction="row" justifyContent="space-around" spacing={20} paddingX={20}>
        <Typography variant="h4" color="primary.dark">
          CoinGecko
        </Typography>
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search for a coin"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          sx={{ flexGrow: 2 }}
        />
        <Switch color="success" onClick={onChangeMode} />
      </Stack>
    </>
  );
};

export default Navbar;
