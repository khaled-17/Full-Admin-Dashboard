import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../components/nivoCharts/Pie";
import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { TheTheme } from "../../components/nivoCharts/TheTheme";

export default function Card({
  Icon,
  title,
  subTitle,
  data,
  scheme,
  increase,
}) {
  const myTheme = TheTheme(useTheme());

  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "280px",
        p: 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack gap={1}>
        {Icon}

        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {subTitle}
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box height={"100px"} width={"100px"}>
          <Pie isReUsableComponents={true} ReData={data} pieColors={scheme} />
        </Box>

        <Typography variant="body2">{increase}</Typography>
      </Stack>
    </Paper>
  );
}
