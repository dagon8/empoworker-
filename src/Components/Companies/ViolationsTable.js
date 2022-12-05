import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable({ companyData }) {
  function createData(name, count) {
    return { name, count };
  }

  const rows = [];

  let violations = companyData.violations;

  for (const key in violations) {
    if (
      key === "flsa_repeat_violator" ||
      key === "flsa_violtn_cnt" ||
      key === "case_violtn_cnt"
    ) {
      continue;
    }
    let name = violations[key].violation_name;
    let count = violations[key].count;
    rows.push(createData(name, count));
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 500 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Violation Name</TableCell>
            <TableCell align='right'>Number of Violations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
