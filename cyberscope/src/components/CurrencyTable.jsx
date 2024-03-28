import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CurrencyTag from "./CurrencyTag";

import ColoredText from "./ColoredText";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3001/api/coins";

export default function CurrencyTable(props) {
  const { coins } = props;
  const navigate = useNavigate();

  function handleDetailsButton(coin) {
    console.log(coin);
    navigate(`/${coin.id}`);
  }

  return (
    <TableContainer component={Paper} elevation={4}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Coin</TableCell>
            <TableCell align="center">Price&nbsp;(USD)</TableCell>
            <TableCell align="center">Change %&nbsp;24h</TableCell>
            <TableCell align="center">High&nbsp;(24h)</TableCell>
            <TableCell align="center">Low&nbsp;(24h)</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <TableRow key={coin.id}>
              <TableCell align="left">
                <CurrencyTag image={coin.image} name={coin.name} symbol={coin.symbol} />
              </TableCell>
              <TableCell align="center">${coin.current_price}</TableCell>
              <TableCell align="center">
                <ColoredText text={coin.price_change_percentage_24h} />
              </TableCell>
              <TableCell align="center">${coin.high_24h}</TableCell>
              <TableCell align="center">${coin.low_24h}</TableCell>

              <TableCell align="right">
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => handleDetailsButton(coin)}
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
