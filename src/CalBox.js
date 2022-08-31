function CalBox({ label, value, onChange, disabled }) {
  return (
    <div>
      <input
        onChange={onChange}
        type="number"
        value={value}
        disabled={disabled}
      />
      &nbsp;
      <label>{label}</label>
    </div>
  );
}

export default CalBox;
