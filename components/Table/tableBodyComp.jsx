import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
function TableBodyComp({ row, index }) {
  const router = useRouter();
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        backgroundColor: index % 2 !== 0 ? "rgb(240, 240, 240)" : "white",
        ":hover": {
          cursor: "pointer",
        },
      }}
      onClick={() => {
        router.replace(`/currency/${row.id}`);
      }}
    >
      <TableCell
        sx={{ fontWeight: 600, display: "flex" }}
        component="th"
        scope="row"
      >
        <Box>
          <img src={row.image} style={{ height: "40px" }} alt="" />
        </Box>
        <Box sx={{ pt: 1, ml: 2 }}>{row.name}</Box>
      </TableCell>
      <TableCell align="center">{row.current_price}</TableCell>
      <TableCell align="center">{row.market_cap}</TableCell>
      <TableCell align="center">{row.high_24h}</TableCell>
      <TableCell align="center">{row.low_24h}</TableCell>
    </TableRow>
  );
}

export default TableBodyComp;
