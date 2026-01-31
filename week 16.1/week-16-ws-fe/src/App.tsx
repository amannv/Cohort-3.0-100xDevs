import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [socket, setSocket] = useState();
  const inputRef = useRef(null);

  const sendMessage = () => {
    if (!socket) {
      return;
    }
    //@ts-ignore
    socket.send(inputRef.current?.value);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev) => {
      alert(ev.data);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default App;
