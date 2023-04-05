import React from "react";
import { Bar } from "react-chartjs-2";

export const Chart = ({
  labels = [],
  labelText,
  data = [],
  text,
}: {
  labels: any,
  labelText: string,
  data: any,
  text: string,
}) => {

  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            label: labelText,
            backgroundColor: [
              "red",
              "blue",
              "orange",
              "brown",
              "cyan",
              "green",
              "yellow",
              "Maroon",
              "Violet",
              "Lime",
            ],
            data: data,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: text,
            position: "top",
          },
          legend: {
            maxWidth: 100,
            display: false,
            position: "right",
            labels: {
              font: {
                size: 26,
                weight: "600",
              },
            },
          },
        },
        // responsive: true,
      }}
    />
  );
};
