import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../Pie/Pie";
import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { TheTheme } from "../TheTheme";

export default function Card({ Icon, title, subTitle, data,scheme, increase }) {

    const myTheme = TheTheme(useTheme());


  return (
    <Paper
      sx={{
        flexGrow:1,
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
      <Stack alignItems={"center"} >


        <Box height={"70px"} width={"100px"}>
          <ResponsivePie
              theme={myTheme}

            data={data}
            margin={{ top: 8 , right: 80, bottom: 10, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}


            colors={{ scheme: scheme }}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            enableArcLinkLabels={false}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
          />
        </Box>

        <Typography variant="body2">{increase}</Typography>
      </Stack>
    </Paper>
  );
}
