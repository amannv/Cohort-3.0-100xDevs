import { useEffect, useRef, useState } from "react"
import "./index.css"



const App = () => {
  const [messages, setMessages] = useState(["hi there", "Hello"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data]);
    }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red",
        }
      }));
    }

    return () => {
      ws.close();
    }
  }, []);

  return (
    <div className="h-screen bg-black flex flex-col justify-between pt-12">
      <div className="90vh">
        {messages.map(messages => <div className="m-20"><span className="bg-blue-50 rounded-md p-6">{messages}</span></div>)}
      </div>
      <div className="flex justify-between 10vh w-full bg-blue-300">
        <input ref={inputRef} className="w-80% gap-2 m-4 text-black outline-none" type="text" placeholder="type your message"></input>
        <button onClick={() => {
          const message = inputRef.current?.value;
          wsRef.current?.send(JSON.stringify({
            type: "chat",
            payload: {
              message: message
            }
          }));
        }} className="bg-blue-50 p-4 m-4 rounded-md cursor-pointer">Send Message</button>
        </div>
    </div>
  )
}

export default App
