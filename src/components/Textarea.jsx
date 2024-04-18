const Textarea = ({ id, label, ...props }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...props} />
    </div>
  );
};

export default Textarea;
