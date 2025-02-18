"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Chart = () => {
  const { prediction } = useSelector((state: RootState) => state.investment);
  const chartData = {
    labels: prediction.map((item) => item.year),
    datasets: [
      {
        label: "Prediction",
        data: prediction.map((item) => item.value),
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderWidth: 1,
        borderColor: `rgb(59, 130, 246)`,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };
  return (
    <section
      className={
        "w-full flex items-center justify-center border-2 border-blue-500 bg-gray-100 rounded-md shadow-xl p-4"
      }
    >
      <Bar data={chartData} options={options} />
    </section>
  );
};
export default Chart;
