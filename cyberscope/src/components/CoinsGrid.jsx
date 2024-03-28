import React, { useState, useEffect } from "react";
import { Button, Container, Box, Pagination } from "@mui/material";
import CurrencyTable from "./CurrencyTable";
import axios from "axios";

const URL = "http://localhost:3001/api/coins";

const CoinsGrid = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  const pageSize = 20;
  const totalCount = 13536;
  const pages = Math.ceil(totalCount / pageSize);

  useEffect(() => {
    const queryParams = {
      pageSize: pageSize,
      page: page,
    };

    axios
      .get(URL, { params: queryParams })
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setCoins(rows);
  }, [page]);

  function handlePageChange(page) {
    setPage(page);
  }

  return (
    <>
      <Container sx={{ marginTop: 8 }}>
        <CurrencyTable coins={coins} />
        <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={pages}
            shape="rounded"
            color="warning"
            onChange={(event, page) => handlePageChange(page)}
          />
        </Box>
      </Container>
    </>
  );
};

export default CoinsGrid;
