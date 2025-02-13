interface Props {
  placeholder: string;
  type: string;
}

export const Input = ({ placeholder, type }: Props) => {
  return (
    <input
      type={type}
      required
      placeholder={placeholder}
      className="p-4 bg-white text-black"
    />
  );
};
