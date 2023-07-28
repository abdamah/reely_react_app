const SeartchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      value={value}
      className="form-control my-3"
      placeholder="Seatch..."
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SeartchBox;
