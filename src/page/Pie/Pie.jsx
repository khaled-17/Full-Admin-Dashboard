import React from 'react' 
import { ResponsivePie } from '@nivo/pie'
import { data } from './data'
import { Box, useTheme } from '@mui/material'
import { TheTheme } from '../TheTheme';
 
export default function Pie({isReUsableComponents=false,ReData}) {
    
    const myTheme = TheTheme(useTheme());
  
    const theme= useTheme()
    return (
        <Box sx={{height:isReUsableComponents?"220px":"80vh"}}>

<ResponsivePie
    theme={myTheme}

        data={data}
        margin={isReUsableComponents?{ top: 10, right: 10, bottom: 10, left: 10 }:{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        enableArcLinkLabels={isReUsableComponents?false:true}

        legends={
            isReUsableComponents?[]:
            [
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
                            itemTextColor: theme.palette.text.primary
                        }
                    }
                ]
            }
        ]
    
    }
    />
        
        </Box>
    
    
    
    )} 


