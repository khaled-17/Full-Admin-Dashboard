import { Box, Typography,useTheme } from '@mui/material'
import React from 'react'
   
export default function Header({titel}) {
    const theme=useTheme()
  return (
    <Box mb={4}>
        <Typography sx={{color:theme.palette.info.light,
            fontWeight:"bold"
        }}
        variant='h5'

        >
{titel}

        </Typography>
        <Typography variant='body1'>
            welocme to your {titel}
        </Typography>
    </Box>
  )
}
