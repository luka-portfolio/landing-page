type Props = {
  divStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
};

const MobileSearchBar = ({ divStyle, inputStyle }: Props) => {
  return (
    <div
      style={divStyle}
      className="will-change-transform"
    >
      <input
        type="text"
        placeholder="Search…"
        className="mx-auto h-10 w-full rounded-full border px-4"
        style={inputStyle}
      />
    </div>
  );
};

export default MobileSearchBar;
