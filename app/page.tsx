import { HomeCard } from "@/components/ui/home-card";

export default function Home() {
  return (
    <div className={"flex flex-1 flex-col items-center justify-start"}>
      <header className={" md:mt-12 flex items-center justify-center p-4"}>
        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <h2 className="text-2xl text-center font-bold italic md:text-3xl lg:text-6xl">
            Expense Tracker Enhanced
          </h2>
        </div>
      </header>
      <main
        className={
          "w-full p-4 flex-1 flex flex-col items-center justify-start xl:h-1/2 pt-4 gap-8"
        }
      >
        <div className={"flex flex-col md:grid grid-cols-2 gap-8 md:mt-12 "}>
          <HomeCard
            title={"Create a monthly budget"}
            description={"See where your money goes"}
            image={"/books.svg"}
            imageAlt={"image of boxes"}
            buttonText={"Create"}
            buttonLink={"/budget"}
          />
          <HomeCard
            title={"Predict your Investment"}
            description={"When will you be rich?"}
            image={"/graphLine.svg"}
            imageAlt={"image of a rocket"}
            buttonText={"See"}
            buttonLink={"/investment"}
          />
        </div>
      </main>
    </div>
  );
}
