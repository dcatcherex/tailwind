const Button = ({ text, color, size, icon }) => {
  return (
    <button className={`bg-${color} text-white py-2 px-4 rounded-md cursor-pointer ${size ? `text-sm ${size}-px` : ''}`}>
      {icon && <i className={icon} />}
      {text}
    </button>
  );
};

export default Button;