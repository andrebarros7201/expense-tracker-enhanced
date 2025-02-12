import Link from "next/link";

const Header = () => {
  return (
    <header
      className={
        "w-full flex items-center justify-center border-2 border-blue-500 p-4"
      }
    >
      <div
        className={
          "flex items-center justify-start w-full max-w-4xl border-2 border-red-500 gap-4"
        }
      >
        <h2 className={"text-2xl italic font-bold"}>
          <Link href={"/"}>Expense Tracker</Link>
        </h2>
        <ul className={"flex justify-start items-center gap-4"}>
          <li>
            <Link href={"/budget"}>Monthly Budget</Link>
          </li>
          <li>
            <Link href={"/investment"}>Investment Calculator</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
