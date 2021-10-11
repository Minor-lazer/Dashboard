import { display } from "@mui/system";
import {Chart,registerables} from "chart.js";

export const DisplayCardGraph = ({id,data,bgColor,brColor}) => {
Chart.register(...registerables);
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
   data :{
        labels:"myChart",
        datasets: [
            {
          label: id,
          data: data,
          fill: true,
          borderColor: brColor,
          backgroundColor: bgColor,
          tension: 0.5
        },

        {
            label: 'My First Dataset',
            data: [56, 55, 40 , 65, 59, 80, 81],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(45, 192, 192)',
            tension: 0.5
          }
    ]

     
    },
    options: {
        scales: {
            
            x: {               
                display:false,
            },
            y: {               
                display:false,
            }
        },

        plugins:{
            legend:{display:false}
        },
     },

     responsive:true,
     maintainAspectRatio:true,
});
}