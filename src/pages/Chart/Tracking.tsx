import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Tracking = () => {
  return (
    <>
      <div className="bg-slate-100 w-full border rounded-lg mt-4">
        <div>Tracking</div>
        <Bar
          data={{
            labels: ["A", "B", "C", "D", "E"],
            datasets: [
              {
                label: "Population (millions)",
                backgroundColor: [
                  "#fbd834",
                  "#8e5ea2",
                  "#3cba9f",
                  "#e8c3b9",
                  "#c45850",
                ],
                data: [2478, 5267, 734, 784, 433],
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "hahaha",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default Tracking;
