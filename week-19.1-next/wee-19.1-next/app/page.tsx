import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex flex-col items-center justify-center font-bold gap-2">
      Todo Application
      <Link className="w-40 text-center text-sm border p-2" href="/signin">Signin to Todo app</Link>
      <Link className="w-40 text-center text-sm border p-2" href="/signup">Signup to Todo app</Link>
    </div>
  );
}
