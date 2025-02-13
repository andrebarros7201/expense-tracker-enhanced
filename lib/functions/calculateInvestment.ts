import { InvestmentItem } from "@/types/investmentItem";

type Args = {
  years: number;
  initialAmount: number;
  monthlyContribution: number;
  yearlyGrowth: number;
};
const calculateInvestment = ({
  years,
  initialAmount,
  monthlyContribution,
  yearlyGrowth,
}: Args) => {
  const monthlyGrowth = 1 + yearlyGrowth / 12 / 100;
  const prediction: InvestmentItem[] = [];
  let balance = initialAmount;

  for (let i = 0; i < years; i++) {
    const data: InvestmentItem = {
      year: new Date().getFullYear() + i,
      value: 0,
      yearlyDifference: 0,
      months: [
        { month: "January", value: 0 },
        { month: "February", value: 0 },
        { month: "March", value: 0 },
        { month: "April", value: 0 },
        { month: "May", value: 0 },
        { month: "June", value: 0 },
        { month: "July", value: 0 },
        { month: "August", value: 0 },
        { month: "September", value: 0 },
        { month: "October", value: 0 },
        { month: "November", value: 0 },
        { month: "December", value: 0 },
      ],
    };

    for (let j = 0; j < 12; j++) {
      balance += monthlyContribution;
      balance *= monthlyGrowth;
      data.months[j].value = balance;
    }

    data.value = balance;
    data.yearlyDifference = i === 0 ? 0 : data.value - prediction[i - 1].value;
    prediction.push(data);
  }
  return prediction;
};

export default calculateInvestment;
