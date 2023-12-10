import { Stack, Paper, Typography, useTheme, Box } from "@mui/material";
import Pie from "../../components/nivoCharts/Pie";
import Barchart from "../../components/nivoCharts/Barchart";
import React from "react";
import Geography from "../../components/nivoCharts/Geography/Geography";

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} mt={3} gap={1}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "32%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px " }}
        >
          compony
        </Typography>

        <Box
sx={{ borderColor: 'primary.main',border: 1, }}
  height={ "500px" }
width={ "100%" }
>

        <Pie isReUsableComponents={true} ReData={undefined} />
</Box>



        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "32%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px " }}
        >
          Sales Quantity
        </Typography>

        <Barchart />
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "32%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px " }}
        >
          Sales Quantity
        </Typography>

        <Geography />
      </Paper>
    </Stack>
  );
}
