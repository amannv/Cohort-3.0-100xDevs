export const Button = ({ disabled, children, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`m-10 rounded-2xl text-4xl px-32 py-10 text-white cursor-pointer ${
        disabled ? "bg-blue-200" : "bg-green-400"
      }`}
    >
      {children}
    </span>
  );
};
