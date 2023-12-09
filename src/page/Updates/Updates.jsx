import * as React from 'react';
 import { Stack } from '@mui/material';
import OneAccordion from './OneAccordion';
  
export default function Updates() {


   



     return (
      
      <>
 
      <Stack direction={"column"} gap={2}>

<OneAccordion defaultExpanded={true} Summary={"V2 "} Details={"Add  theme provider and button toggle by re-use component "}  />
<OneAccordion Summary={"V1 "} Details={"good"}  />


    
      


      
    </Stack >
      
      </>
  )
}
