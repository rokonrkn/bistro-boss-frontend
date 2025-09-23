import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Chart.js registration
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels
);

const DashboardHome = () => {
  // Bar chart data
  const barData = {
    labels: ["Dessert", "Pizza", "Salad", "Soup"],
    datasets: [
      {
        label: "sold",
        data: [30, 35, 20, 25],
        backgroundColor: ["blue", "orange", "green", "red"],
        borderRadius: 100, // cone/pyramid look
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        color: (context) => context.dataset.backgroundColor,
        font: {
          weight: "bold",
          size: 14,
        },
      },
      legend: {
        display: true,
        labels: {
          color: "purple",
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 36,
      },
    },
  };

  // Pie chart data
  const pieData = {
    labels: ["Dessert", "Pizza", "Salad", "Soup"],
    datasets: [
      {
        data: [21, 31, 28, 21], // percentage
        backgroundColor: ["#2196f3", "#00b894", "#fdcb6e", "#e17055"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "diamond", // diamond legend icons
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value) => value + "%",
      },
    },
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h1>
      <p>This is the main dashboard content.</p>

      <div className="grid md:grid-cols-2 gap-20 mt-10 p-10">
        {/* Bar Chart */}
        <div style={{ width: "100%", margin: "auto", background: "#ffe6e6" }}>
          <Bar data={barData} options={barOptions} plugins={[ChartDataLabels]} />
        </div>

        {/* Pie Chart */}
        <div style={{ width: "100%", margin: "auto", height: "300px" }}>
          <Pie data={pieData} options={pieOptions} plugins={[ChartDataLabels]} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
