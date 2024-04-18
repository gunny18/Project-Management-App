const Input = ({ id, label, ...props }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default Input;
