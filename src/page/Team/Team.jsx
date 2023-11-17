import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";

import {
  AdminPanelSettings,
  Synagogue,
  Badge,
  ContactPhone,
} from "@mui/icons-material";
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
//  import {
//   AdminPanelSettings,
//   LockOpenOutlined,
//   SecurityOutlined,
// } from "@mui/icons-material";
export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Email",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              px: 3,
               width: "105px",

              borderRadius: "99px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",

              backgroundColor:
                access === "Admin" ? theme.palette.primary.dark :
                access === "jobseeker" ?theme.palette.secondary.dark:
                access === "business" ?"#dd2c00":
                access === "hybrid" ?'#3e2723':"#00c853",
            }}
          >
            {access==="Admin"&&(<AdminPanelSettings sx={{mx:1,color:'#fff'}}  fontSize="small" />)}
            {access==="jobseeker"&&(<Badge sx={{mx:1,color:'#fff'}}   fontSize="small" />)}
            {access==="business"&&(<BusinessOutlinedIcon sx={{mx:1,color:'#fff'}}   fontSize="small" />)}
            {access==="hybrid"&&(<ContactPhone sx={{mx:1,color:'#fff'}}   fontSize="small" />)}
             <Typography sx={{  fontSize: "13px" ,color:'#fff'}}  >{access} </Typography>
          </Box>
        );
      },
    },
  ];

  return (
       <Box sx={{ height: 600,wigth:"98%" ,mx:"auto" }}>
        <DataGrid 
              // slots={{toolbar: GridToolbar,}} 

        rows={rows} columns={columns}  />
      </Box>
   );
}
