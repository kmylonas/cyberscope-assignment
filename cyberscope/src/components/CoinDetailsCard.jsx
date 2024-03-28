import React, { useEffect } from "react";
import {
  CardContent,
  Container,
  Stack,
  Typography,
  Divider,
  ListItem,
  List,
  Paper,
  Button,
  CardActions,
} from "@mui/material";
import CurrencyTag from "./CurrencyTag";
import PriceChangePeriod from "./PriceChangePeriod";
import ColoredText from "./ColoredText";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:3001/api/coins";

const CoinDetailsCard = (props) => {
  const [coin, setCoin] = useState({});

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    axios
      .get(URL + `/${id}`)
      .then((res) => {
        console.log(res.data);
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const periodMapping = {
    "24h": "price_change_24h",
    "7d": "price_change_7d",
    "14d": "price_change_14d",
    "1m": "price_change_30d",
    "2m": "price_change_60d",
    "200d": "price_change_200d",
    "1y": "price_change_1y",
  };

  const [period, setPeriod] = useState("24h");

  const handlePeriodChange = (event, newPeriod) => {
    setPeriod(newPeriod);
  };

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function keepFirstTwoPeriods(text) {
    if (!text) return;
    const firstPeriodIndex = text.indexOf(".");
    const secondPeriodIndex = text.indexOf(".", firstPeriodIndex + 1);

    if (firstPeriodIndex !== -1 && secondPeriodIndex !== -1) {
      return text.substring(0, secondPeriodIndex + 1);
    } else {
      return text;
    }
  }

  return (
    <Container sx={{ marginTop: 13 }}>
      <Paper>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <CurrencyTag image={coin.image} name={coin.name} symbol={coin.symbol} />
            <CardActions>
              <Button color="info" variant="contained" onClick={handleBack}>
                Back
              </Button>
            </CardActions>
          </Stack>

          <Typography variant="h4" component="div">
            ${coin.currentPrice}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {keepFirstTwoPeriods(coin.descr)}
          </Typography>
          <List>
            <Divider />
            <ListItem>
              <Stack k width="100%" direction="row" justifyContent="space-between">
                <Typography>High 24h:</Typography> <Typography>${coin.high_24h}</Typography>{" "}
              </Stack>
            </ListItem>
            <Divider />
            <ListItem>
              <Stack width="100%" direction="row" justifyContent="space-between">
                <Typography>Low 24h:</Typography> <Typography> ${coin.low_24h}</Typography>
              </Stack>
            </ListItem>
            <Divider />
            <ListItem>
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <ColoredText text={coin[periodMapping[period]]} />
                <PriceChangePeriod onPeriodChange={handlePeriodChange} period={period} />
              </Stack>
            </ListItem>
          </List>
        </CardContent>
      </Paper>
    </Container>
  );
};

export default CoinDetailsCard;
