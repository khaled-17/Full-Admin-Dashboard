import { Paper, Stack, useTheme } from "@mui/material";
import React from "react";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "./Card";
import TheCopyButton from "../../hook/TheCopyButton";

import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data.js";
 export default function Row1() {


  const theme=useTheme()

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", ms: "space-between" }}
    >

      <TheCopyButton/>

      <Card
        Icon={<EmailIcon sx={{fontSize:"23px",color:theme.palette.secondary.main }} />}
        title={"12,361"}
        subTitle={"Email send"}
        data={data1}
        scheme={"category10"}
        increase={"+14"}
      />
       <Card
        Icon={<PointOfSaleIcon sx={{fontSize:"23px",color:theme.palette.secondary.main }} />}
        title={"12,361"}
        subTitle={"sales obtamied"}
        data={data2}
        scheme={"paired"}
        increase={"+14"}
      />
      <Card
        Icon={<PersonAddIcon sx={{fontSize:"23px",color:theme.palette.secondary.main }} />}
        title={"12,361"}
        subTitle={"New client"}
        data={data3}
        scheme={"dark2"}
        increase={"+14"}
      />
      <Card
        Icon={<TrafficIcon sx={{fontSize:"23px",color:theme.palette.secondary.main }} />}
        title={"12,361"}
        subTitle={"Traffic recelved"}
        data={data4}
        scheme={"set1"}
        increase={"+14"}
      /> 



     </Stack>
  );
}
