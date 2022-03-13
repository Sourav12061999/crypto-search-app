import React from "react";
import { Box, Paper } from "@mui/material";
function CoinDetails({ data }) {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Paper component={"div"} sx={{ flexGrow: 1, padding: "5%" }}>
        <p>Rank #{data.market_cap_rank}</p>
        <div>
          <img src={data.image.small} alt="" />
          <h2>
            {data.name} ( {data.symbol.toUpperCase()} )
          </h2>
        </div>
        <h2>
          Current Price:- ${data.market_data.current_price.usd.toFixed(2)}
        </h2>
        <h2>Market Cap:- ${data.market_data.market_cap.usd.toFixed(2)}</h2>
        <h2>24H High:- ${data.market_data.high_24h.usd.toFixed(2)}</h2>
        <h2>24H Low:- ${data.market_data.low_24h.usd.toFixed(2)}</h2>
      </Paper>
      <Paper
        component={"div"}
        sx={{
          flexGrow: 1,
          padding: "5%",
          ml: { xs: "0%", md: "2%" },
          mt: { xs: "2%", md: "0%" },
        }}
      >
        <h1>Info</h1>
        <h3>
          Webside:- <p>{data.links.homepage[0]}</p>
        </h3>
        <h3>
          Reddit:- <p>{data.links.subreddit_url}</p>
        </h3>
        <h3>
          Github Repo:- <p>{data.links.repos_url.github[0]}</p>
        </h3>
      </Paper>
    </Box>
  );
}

export default CoinDetails;
