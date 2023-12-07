import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
 import { Box } from "@mui/material";
import { columns, rows } from './data';

import Header from "../../components/Header";

 
export default function Contacts() {
  return (
    <Box sx={{ height: 600,wigth:"98%" ,mx:"auto" }}>
      <Header titel={"Contacts"} />

    <DataGrid 
      slots={{toolbar: GridToolbar,}} 
  
  rows={rows} columns={columns}  />
  </Box>

  )
}
