import { Box,useTheme } from "@mui/material";
import React from "react";
import { ResponsiveLine } from '@nivo/line'
import { data } from "./data";
import {TheTheme} from '../TheTheme'
export default function Line() {

    const myTheme = TheTheme(useTheme());


  return   (
  <Box sx={{height:"50vh"}}>


<ResponsiveLine
  theme={myTheme}
         data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        lineWidth={1}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-21}
        enableArea={true}
        areaOpacity={0.8}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: -30,
                itemsSpacing: 2,
                itemDirection: 'left-to-right',
                itemWidth: 82,
                itemHeight: 15,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'red',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />

  </Box>
  )
}
