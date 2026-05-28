interface TextInputProps {
  placeholder: string;
  type: string;
  onChange?: (e: any) => void;
}

export function TextInput({ placeholder, type, onChange }: TextInputProps) {
  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
          borderColor: "black",
          borderWidth: 1,
        }}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      ></input>
    </div>
  );
}
