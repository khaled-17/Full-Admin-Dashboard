import React from 'react'
import Bar from './Bar'
 
export default function Barchart({isReUsableComponents=false}) {




   
  return (
    <div>
       <Bar TheData={data} TheKey={key}/>
    </div>
  )
}

const key= ["Spain", "France", "Germany"]

const data = [
    {
      year: 2019,
      Spain: 900,
      France: 1400,
      Germany: 1700,
    },
  
    {
      year: 2020,
      Spain: 1000,
      France: 1500,
      Germany: 1800,
    },
  
    {
      year: 2021,
      Spain: 1100,
      France: 1600,
      Germany: 1900,
    },
  
    {
      year: 2022,
      Spain: 1200,
      France: 1700,
      Germany: 2000,
    },
  
    {
      year: 2023,
      Spain: 1260,
      France: 1709,
      Germany: 2080,
    },
  ];
  