interface Props {
  placeholder?: string;
  type: string;
  name: string;
  min?: number;
  max?: number;
}

export const Input = ({ placeholder, type, name, min, max }: Props) => {
  return (
    <div className={"flex flex-col items-start gap-2 "}>
      <label htmlFor={name} className={"capitalize"}>
        {name}
      </label>
      <input
        type={type}
        required
        id={name}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
        className="py-2 px-2 bg-white rounded w-full text-black border-2 box-border border-blue-500 placeholder:italic  appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]"
      />
    </div>
  );
};

export default Input;
