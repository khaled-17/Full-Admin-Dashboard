

export const TheTheme = (theme) => (
  {
    textColor: theme.palette.text.primary,
    fontSize: 11,
    axis: {
      domain: {line: {stroke: theme.palette.divider,strokeWidth: 1,},},
      legend: {text: {fontSize: 12,fill: theme.palette.text.primary,},},
      ticks: {
        line: {stroke: theme.palette.divider,strokeWidth: 1,},
        text: {fontSize: 11,fill: theme.palette.text.secondary,},
      },
    },
    grid: {
      line: {stroke: theme.palette.divider,strokeWidth: 1,},
    },
    legends: {
      title: {text: {fontSize: 11,fill: theme.palette.text.primary,},},
      text: {fontSize: 11,fill: theme.palette.text.primary,},
      ticks: {line: {},text: {fontSize: 10,fill: theme.palette.text.primary,},},
    },
    annotations: {
      text: {fontSize: 13,fill: theme.palette.text.primary,outlineWidth: 2,outlineColor: "#ffffff",outlineOpacity: 1,},
      link: {stroke: "#000000",strokeWidth: 1,outlineWidth: 2,outlineColor: "#ffffff",outlineOpacity: 1,},
      outline: {stroke: "#000000",strokeWidth: 2,outlineWidth: 2,outlineColor: "#ffffff",outlineOpacity: 1,},
      symbol: {fill: "#000000",outlineWidth: 2,outlineColor: "#ffffff",outlineOpacity: 1,},
    },
    tooltip: {
      container: {
        background: theme.palette.background.default,color: theme.palette.text.primary,fontSize: 12,},
      basic: {},chip: {},table: {},tableCell: {},tableCellValue: {},},
  }

 

);


 

  //  default TheTheme;