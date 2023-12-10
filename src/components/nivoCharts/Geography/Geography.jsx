import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import React from "react";
import { data } from "./data.js";
import { geo } from "./world_countries.js";
import { TheTheme } from "../../../page/TheTheme.js";

export default function Geography() {
  const myTheme = TheTheme(useTheme());

  return (
    <Box sx={{ height: "70vh" }}>
      <ResponsiveChoropleth
        theme={myTheme}
        data={data}
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="mercator"
        projectionScale={90}
        projectionTranslation={[0.6, 0.5]}
        projectionRotation={[296, 360, -360]}
        enableGraticule={true}
        graticuleLineWidth={1}
        graticuleLineColor="#dddddd"
        borderColor="#152538"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: "gradient",
            type: "linearGradient",
            colors: [
              {
                offset: 0,
                color: "#000",
              },
              {
                offset: 100,
                color: "inherit",
              },
            ],
          },
        ]}
        fill={[
          {
            match: {
              id: "CAN",
            },
            id: "dots",
          },
          {
            match: {
              id: "CHN",
            },
            id: "lines",
          },
          {
            match: {
              id: "ATA",
            },
            id: "gradient",
          },
        ]}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 49,
            translateY: -65,
            itemsSpacing: 0,
            itemWidth: 85,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
