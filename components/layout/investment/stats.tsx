"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Stats = () => {
  const { stats } = useSelector((state: RootState) => state.investment);
  return (
    <section
      className={
        "w-full border-2 border-blue-500 rounded-md shadow-xl p-4 flex flex-col items-center justify-evenly bg-gray-100 gap-4"
      }
    >
      <p>
        Total Invested:{" "}
        {String(stats.totalInvested).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} $
      </p>
      <p>
        Initial Amount:{" "}
        {String(stats.initialInvestment).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
        $
      </p>
      <p>
        Final Value:{" "}
        {String(stats.finalValue).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} $
      </p>
      <p>
        Total Growth:{" "}
        {String(stats.totalGrowth).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} $
      </p>
    </section>
  );
};

export default Stats;
