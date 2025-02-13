type Props = {
  options: string[];
  id: string;
  name?: string;
};

export const InputSelect = ({ id, name, options }: Props) => {
  return (
    <select id={id} name={name} required>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
