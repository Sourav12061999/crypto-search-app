import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
function TableBodyComp({ row, index }) {
  return (
    <TableRow
      key={row.name}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        backgroundColor: index % 2 !== 0 ? "rgb(240, 240, 240)" : "white",
      }}
    >
      <TableCell sx={{ fontWeight: 600 }} component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="center">{row.calories}</TableCell>
      <TableCell align="center">{row.fat}</TableCell>
      <TableCell align="center">{row.carbs}</TableCell>
      <TableCell align="center">{row.protein}</TableCell>
    </TableRow>
  );
}

export default TableBodyComp;
