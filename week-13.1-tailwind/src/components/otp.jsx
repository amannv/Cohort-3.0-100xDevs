import { useRef, useState } from "react";
import { Button } from "./button"

export const Otp = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex justify-center">
      <SubOtpBox
        reference={ref1}
        onDone={() => {
          ref2.current.focus();
        }}
        onBack={() => {
        }}
      />
      <SubOtpBox
        reference={ref2}
        onDone={() => {
          ref3.current.focus();
        }}
        onBack={() => {
          ref1.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref3}
        onDone={() => {
          ref4.current.focus();
        }}
        onBack={() => {
          ref2.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref4}
        onDone={() => {
          ref5.current.focus();
        }}
        onBack={() => {
          ref3.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref5}
        onDone={() => {
          ref6.current.focus();
        }}
        onBack={() => {
          ref4.current.focus();
        }}
      />
      <SubOtpBox
        reference={ref6}
        onDone={() => {
          setDisabled(false)
        }}
        onBack={() => {
          ref5.current.focus();
        }}
      />
      <Button disabled={disabled}>Sign Up</Button>
    </div>
  );
};

function SubOtpBox({ reference, onDone, onBack }) {

    const [inputBox, setInputBox] = useState("");

  return (
    <>
      <input
        ref={reference}
        value={inputBox}
        type="text"


        onKeyUp={(e) => {
          if(e.key == "Backspace") {
            onBack();
          }
        }}
        
        onChange={(e) => {
          const val = e.target.value;
          if(val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" ||
            val == "8" || val == "9") {
              setInputBox(val);
              onDone();
          } else {

          }  
        }}

        className="my-20 w-[40px] h-[50px] m-1 border-1 border-white/20 rounded-xl bg-blue-500 border-white-1 outline-none px-4
         text-white"
      ></input>
    </>
  );
}
