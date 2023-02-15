const FigureScreen = ({ vector, top, left }) => {
  return <div className={`absolute ${left} ${top}`}>{vector}</div>;
};

export default FigureScreen;
