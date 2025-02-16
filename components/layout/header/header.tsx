"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <header className={"w-full flex items-center justify-center p-4 shadow"}>
      <div
        className={"flex items-center justify-center w-full max-w-4xl gap-4"}
      >
        <h2 className={"text-xl lg:text-2xl italic font-bold"}>
          <Link href={"/"}>Expense Tracker</Link>
        </h2>
        <ul className={"flex justify-start items-center gap-4"}>
          <li className={`${path === "/budget" ? "text-blue-500" : ""}`}>
            <Link href={"/budget"}>Monthly Budget</Link>
          </li>
          <li className={`${path === "/investment" ? "text-blue-500" : ""}`}>
            <Link href={"/investment"}>Investment Calculator</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
