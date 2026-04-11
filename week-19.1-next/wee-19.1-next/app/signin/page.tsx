"use client";

import axios from "axios";
import { useRef } from "react";

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signin = async () => {
    await axios.post("http://localhost:3000/api/v1/signin", {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-lg font-bold">Sign in Page</h1>
      <div className="flex gap-2">
        <label className="p-1">Email:</label>
        <input
          ref={emailRef}
          className="border p-1 pl-2"
          type="text"
          placeholder="email"
        ></input>
      </div>
      <div className="flex gap-2">
        <label className="p-1">Password:</label>
        <input
          ref={passwordRef}
          className="border p-1 pl-2"
          type="password"
          placeholder="password"
        ></input>
      </div>
      <button onClick={signin} className="border p-2 px-4">Sign in</button>
    </div>
  );
}
