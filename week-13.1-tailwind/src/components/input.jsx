export const InputBox = ({ onClick, type, placeholder }) => {
  return (    
    <span
      onClick={onClick}
      className={`m-8 p-8 rounded-2xl text-4xl px-2 py-2 text-white cursor-pointer bg-blue-500`}> 
      <input className="bg-blue-500 outline-none" type={type} placeholder={placeholder}></input>
    </span>
  );
};
