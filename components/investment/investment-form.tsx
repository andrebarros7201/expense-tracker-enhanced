import Input from "@/components/ui/input";

const InvestmentForm = () => {
  return (
    <section
      className={
        "border-2 border-blue-500 w-full flex flex-col p-4 bg-gray-100 rounded-md shadow-xl"
      }
    >
      <form
        className={"gap-4 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-5"}
      >
        <Input
          type={"number"}
          name={"years"}
          label={"Years"}
          min={0}
          max={50}
        />
        <Input
          type={"number"}
          name={"initial_amount"}
          label={"Initial Amount"}
          min={0}
        />{" "}
        <Input
          type={"number"}
          name={"monthly_contribution"}
          label={"Monthly Contribution"}
          min={0}
        />{" "}
        <Input
          type={"number"}
          name={"yearly_growth"}
          label={"Yearly Growth"}
          min={0}
          max={50}
        />
        <button
          className={
            "bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-all duration-300 shadow-md sm:col-span-2 md:col-span-1"
          }
        >
          Calculate
        </button>
      </form>
    </section>
  );
};

export default InvestmentForm;
