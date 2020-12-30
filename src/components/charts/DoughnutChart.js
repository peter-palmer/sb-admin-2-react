import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
   const data = {
      labels: ["Red", "Green", "Yellow"],
      datasets: [
         {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
         },
      ],
   };
   return (
      <div>
         <Doughnut data={data} />
      </div>
   );
}

export default DoughnutChart;
