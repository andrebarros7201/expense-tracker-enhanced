import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
};

export const HomeCard = ({
  title,
  description,
  image,
  imageAlt,
  buttonText,
  buttonLink,
}: Props) => {
  return (
    <div className="bg-gray-100 rounded-xl p-6 shadow-md shadow-gray-300 flex flex-col lg:flex-row items-center gap-6">
      <img
        src={image}
        alt={imageAlt}
        className="object-contain w-1/4 lg:w-1/3"
      />
      <div className="flex items-center justify-center lg:items-start flex-col gap-2 text-gray-800">
        <h4 className="text-lg lg:text-2xl font-bold">{title}</h4>
        <p className="text-gray-600">{description}</p>
        <Link href={buttonLink} className="mt-2">
          <button className="py-2 px-6 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-md">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};
