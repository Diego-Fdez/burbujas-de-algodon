const FigureScreen = ({ svgElement }) => {
  return (
    <>
      {svgElement.map((svg) => (
        <div key={svg.id} className={`absolute ${svg.left} ${svg.top}`}>
          {svg.svg}
        </div>
      ))}
    </>
  );
};

export default FigureScreen;
