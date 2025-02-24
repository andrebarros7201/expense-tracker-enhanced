import { InvestmentItem } from "@/types/investmentItem";
import { saveAs } from "file-saver";
import Papa from "papaparse";

function flattenData(data: InvestmentItem[]) {
  return data.map((row) => ({
    ...row,
    months: row.months
      .map(
        (month: { value: number; month: string }) =>
          `${month.month}: $${month.value}`,
      )
      .join(" | "),
  }));
}

const exportToCSV = (data: InvestmentItem[]) => {
  const flatData = flattenData(data);
  const csv = Papa.unparse(flatData);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  saveAs(blob, "investment.csv");
};

export default exportToCSV;
