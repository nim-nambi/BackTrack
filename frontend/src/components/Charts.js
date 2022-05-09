import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Total number of projects",
    "Total Number of sub-tasks",
    "In progress",
    "Done",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [5, 3, 2, 1],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 198, 54, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 198, 54, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Stats(props) {
  return (
    <Pie
      data={data}
       height={300}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            display: true,
            title: {
              display: true,
              text: props.batch,
              padding: {
                top: 20,
              },
            },
          },
        },
      }}
    />
  );
}