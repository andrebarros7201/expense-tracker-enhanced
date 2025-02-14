type Props = {
  options: string[];
  name: string;
};

const InputSelect = ({ name, options }: Props) => {
  return (
    <select id={name} name={name} required>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
