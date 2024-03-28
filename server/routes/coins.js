const express = require("express");
const Router = express.Router();
const axios = require("axios");

const apiUrl = process.env.API;
const key = process.env.KEY;

/* /api/coins?pageSize=5&page=1 */
Router.get("/", async (req, res, next) => {
  try {
    const queryParams = {
      vs_currency: "usd",
      per_page: req.query.pageSize || 20,
      page: req.query.page || 1,
    };

    console.log(queryParams);

    const result = await axios.get(apiEndpoint("/coins/markets"), { params: queryParams });
    const modifiedCoins = modifyCoins(result.data);
    console.log(modifiedCoins);
    return res.status(200).send(modifiedCoins);
    // res.status(200).send(result.data);
  } catch (ex) {
    next(ex);
  }
});

/* /api/coins/:id?quoteCurrencySymbol */
Router.get("/:id", async (req, res, next) => {
  try {
    const queryParams = {
      localization: "false",
    };

    const baseCurrencyId = req.params.id;
    const baseCurrencySymbol = req.query.baseCurrencySymbol;
    const quoteCurrencySymbol = req.query.quoteCurrencySymbol;

    console.log(baseCurrencyId);
    const result = await axios.get(apiEndpoint(`/coins/${baseCurrencyId}`), {
      params: queryParams,
    });
    const modifiedDetails = modifyDetails(
      result.data,
      baseCurrencySymbol,
      quoteCurrencySymbol || "usd"
    );

    res.status(200).send(modifiedDetails);
  } catch (ex) {
    next(ex);
  }
});

function modifyDetails(coinObj, baseSymbol, quoteSymbol) {
  const data = coinObj.market_data;
  const details = {
    currentPrice: coinObj.market_data.current_price[quoteSymbol],
    name: coinObj.name,
    descr: coinObj.description.en,
    symbol: coinObj.symbol,
    price_change_24h: data.price_change_percentage_24h_in_currency[quoteSymbol],
    price_change_7d: data.price_change_percentage_7d_in_currency[quoteSymbol],
    price_change_14d: data.price_change_percentage_14d_in_currency[quoteSymbol],
    price_change_30d: data.price_change_percentage_30d_in_currency[quoteSymbol],
    price_change_60d: data.price_change_percentage_60d_in_currency[quoteSymbol],
    price_change_200d: data.price_change_percentage_200d_in_currency[quoteSymbol],
    price_change_1y: data.price_change_percentage_1y_in_currency[quoteSymbol],
    high_24h: data.high_24h[quoteSymbol],
    low_24h: data.low_24h[quoteSymbol],
    image: coinObj.image.small,
  };

  return details;
}

function modifyCoins(coins) {
  const modifiedCoins = coins.map((coin) => {
    const modifiedCoin = {
      id: coin.id,
      name: coin.id,
      symbol: coin.symbol,
      current_price: coin.current_price,
      high_24h: coin.high_24h,
      low_24h: coin.low_24h,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      image: coin.image,
    };
    return modifiedCoin;
  });

  return modifiedCoins;
}

function apiEndpoint(suffix) {
  return apiUrl + suffix;
}

module.exports = Router;
