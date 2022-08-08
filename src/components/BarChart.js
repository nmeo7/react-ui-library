import React from 'react'
import Chart from "react-apexcharts"

export const BarChart = props => {
    const options = {
        chart: {
            type: 'bar'
        },
        xaxis: {
          categories: Object.keys(props.data)
        },
        colors: ['#000000' ],
        endingShape: "rounded",
      }
      
    const series = [
        {
          name: props.name,
          data: Object.values(props.data)
        }
      ]
  return (
    <Chart options={options} series={series} type="bar" />
  )
}
