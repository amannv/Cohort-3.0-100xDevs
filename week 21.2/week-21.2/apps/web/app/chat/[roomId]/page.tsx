import { TextInput } from "@repo/ui/text-input";



export default function ChatPage() {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            background: "black",
            color: "white",
        }}>
            <div>Chat Room</div>
            <TextInput placeholder="chat" type="text"></TextInput>
        </div>
    )
}