"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const signup = async () => {
    await axios.post("http://localhost:3000/api/v1/signup", {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
    router.push("/signin");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-lg font-bold">Sign up Page</h1>
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
      <button onClick={signup} className="border p-2 px-4">Sign up</button>
    </div>
  );
}
