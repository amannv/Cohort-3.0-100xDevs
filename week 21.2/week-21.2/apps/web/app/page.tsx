"use client"
import { TextInput } from "@repo/ui/text-input"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  return (
    <div style={
      {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        background: "black",
        alignItems: "center",
      }
    }>
      <TextInput onChange={() => {
        alert("hi")
      }} type="text" placeholder="Room Id"></TextInput>
      <button onClick={() => {
        router.push("/chat/123")
      }}>Join Room</button>
    </div>
  )
}