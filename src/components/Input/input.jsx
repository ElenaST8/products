const Input = (props) => {
  const { value, type, placeholder, label, onChangeFunction } = props;

  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) => onChangeFunction(event.target.value)}
        value={value}
      />
    </label>
  );
};

export default Input;
