import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import { TheTheme } from "../../page/TheTheme";

// Static  data
const Staticdata = [
  {
    id: "go",
    label: "go",
    value: 159,
    color: "hsl(4, 70%, 50%)",
  },
  {
    id: "Html",
    label: "go",
    value: 159,
    color: "hsl(4, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 217,
    color: "hsl(253, 70%, 50%)",
  },
  {
    id: "c++",
    label: "c++",
    value: 217,
    color: "hsl(253, 70%, 50%)",
  },
];

export default function Pie({ isReUsableComponents = false, ReData ,pieColors}) {
  const myTheme = TheTheme(useTheme());

  
   
  const theme = useTheme();
  return (
    <Box  
    sx={{mx: 'auto'}}
    height={isReUsableComponents ? "100%" : "80vh" }
    width={isReUsableComponents ? "100%" : "80vh" }

    >
      <ResponsivePie
        theme={myTheme}
        data={ReData||Staticdata}
    
        colors={{ scheme: pieColors||'nivo' }}

        margin={
          isReUsableComponents
            ? { top: 8, right: 80, bottom: 10, left: 80 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        arcLabel="id"
 
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
        enableArcLinkLabels={isReUsableComponents ? false : true}
        enableArcLabels={isReUsableComponents ? false : true}
        legends={[
          {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000'
                      }
                  }
              ]
          }
      ]}

  
        
      />
    </Box>
  );
}
