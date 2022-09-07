const NavigationLink = ({ href, icon, text }) => {
  return (
    <a
      href={href}
      className=" flex flex-wrap gap-1 hover:bg-blue-500 text-white sm:px-4 sm:py-2 rounded-md transition-all"
    >
      {icon}
      {text}
    </a>
  );
};

export default NavigationLink;
