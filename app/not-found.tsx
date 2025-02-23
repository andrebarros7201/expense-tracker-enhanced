import Link from "next/link";

const NotFound = () => {
  return (
    <div className={"flex flex-col gap-4 w-full items-center pt-4"}>
      <h2 className={"text-blue-500 font-bold italic text-2xl"}>
        Page Not Found
      </h2>
      <button
        className={
          "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded duration-300 transition-all"
        }
      >
        <Link href={"/"}>Return to Home Page</Link>
      </button>
    </div>
  );
};

export default NotFound;
