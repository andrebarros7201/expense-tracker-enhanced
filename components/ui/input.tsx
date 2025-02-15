import { ChangeEvent, forwardRef } from "react";

interface Props {
  placeholder?: string;
  type: string;
  name: string;
  min?: number;
  max?: number;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // Correct type
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, type, name, min, max, label, onChange }, ref) => {
    return (
      <div className={"flex flex-col items-start gap-2 "}>
        {label ? <label htmlFor={name}>{label}</label> : null}

        <input
          type={type}
          required
          id={name}
          name={name}
          min={min}
          max={max}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          className="p-2 bg-white rounded w-full text-black border-2 box-border border-blue-500 placeholder:italic appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]"
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
