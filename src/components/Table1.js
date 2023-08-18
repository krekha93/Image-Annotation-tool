import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function Table1({ fileData }) {
  const isEmpty = fileData.length === 0;

  return (
    <TableContainer
      component={Paper}
      style={{
        marginTop: "80px",

        padding: "10px",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>File_Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">File_Size</TableCell>
            <TableCell align="right">File_Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isEmpty ? (
            <TableRow>
              {/* <TableCell colSpan={4}> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "150px",
                  marginLeft: "250px",
                }}
              >
                <h1>No Files Uploaded</h1>
              </div>
              {/* </TableCell> */}
            </TableRow>
          ) : (
            fileData.map((file) => (
              <TableRow
                key={file.file_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/annotation/${file.file_name}`}>
                    {file.file_name}
                  </Link>
                </TableCell>
                <TableCell align="right">{file.status}</TableCell>
                <TableCell align="right">{file.file_size}</TableCell>
                <TableCell align="right">{file.file_type}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
