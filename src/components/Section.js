const Section = ({ heading, id }) => {
  return (
    <div className="text-center min-h-screen">
      <div id={id} className="text-5xl font-bold text-blue-700 my-2">
        {heading}
      </div>
    </div>
  );
};

export default Section;
