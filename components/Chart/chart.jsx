import {
  LineChart,
  Line,
  // CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  // BarChart,
} from "recharts";
import { useState } from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
function Charts({ chartData, coinid }) {
  let stroke = "#66BB6A";
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [chart, setchart] = useState(chartData);
  const [disableButton, setdisableButton] = useState(1);
  let data = [];
  if (chart.prices[0][1] > chart.prices[chart.prices.length - 1][1]) {
    stroke = "#F44336";
  }
  let min = null;
  let max = 0;
  chart.prices.forEach((element) => {
    let obj = {};
    let d = new Date(element[0]);
    let year = d.getFullYear();
    let date = `${monthNames[d.getMonth()]} ${d.getDate()}
                      (${year})`;
    obj.date = date;
    obj.price = +element[1].toFixed(2);
    data.push(obj);
    if (min == null) {
      min = element[1].toFixed(2);
    } else if (min > element[1].toFixed(2)) {
      min = +element[1].toFixed(2);
    }
    if (max < element[1].toFixed(2)) {
      max = +element[1].toFixed(2);
    }
  });
  async function changeChart(days, interval) {
    let response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
    );
    let data = await response.json();
    setchart(data);
  }
  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <div>
        <Button
          onClick={() => {
            setchart(chartData);
            setdisableButton(1);
          }}
          disabled={disableButton === 1 ? true : false}
        >
          7D
        </Button>
        <Button
          onClick={() => {
            changeChart(30, "daily");
            setdisableButton(2);
          }}
          disabled={disableButton === 2 ? true : false}
        >
          30D
        </Button>
        <Button
          onClick={() => {
            changeChart(180, "daily");
            setdisableButton(3);
          }}
          disabled={disableButton === 3 ? true : false}
        >
          6months
        </Button>
        <Button
          onClick={() => {
            changeChart(366, "daily");
            setdisableButton(4);
          }}
          disabled={disableButton === 4 ? true : false}
        >
          1year
        </Button>
        <Button
          onClick={() => {
            changeChart("max", "monthly");
            setdisableButton(5);
          }}
          disabled={disableButton === 5 ? true : false}
        >
          max
        </Button>
      </div>
      <LineChart
        style={{ margin: "auto" }}
        BarChart
        width={1000}
        height={500}
        data={data}
      >
        <Line type="basis" dataKey="price" stroke={stroke} dot={false} />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="date" />
        <YAxis domain={[min, max]} allowDataOverflow={true} />
        <Tooltip />
      </LineChart>
    </Box>
  );
}

export default Charts;
