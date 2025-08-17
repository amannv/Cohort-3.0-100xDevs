import { useState } from 'react'

function App() {

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <NotificationCount></NotificationCount>
    </div>
  )
}



function NotificationCount() {
  const [notificationCount, setnotificationCount] = useState(0);

  console.log("re-render");

  function Increment() {
    setnotificationCount(notificationCount + 1);
  }

  return (
    <div>
    <button onClick={Increment}>
      Increase Count
    </button>
    {notificationCount}
    </div>
  );
}

export default App








{/* <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <PostComponent></PostComponent>
      <br/>
      <PostComponent></PostComponent>
      <br/>
      <PostComponent></PostComponent>
      </div>
    </div> */}




// const style = { width: 200, backgroundColor: "white", borderRadius: 15, borderColor: "Grey", borderWidth: 1, padding: 20 }

// function PostComponent() {
//   return <div style={style}>
//   <div style={{ display: "flex" }}>
//     <img src={"https://images.icon-icons.com/2389/PNG/512/notion_logo_icon_145025.png"} style={{
//       width: 35,
//       height: 35,
//       borderRadius: 2
//     }} />
//     <div style={{ fontSize: 10, marginLeft: 6 }}>
//       <b>Notion</b>
//       <div>
//       23,777 Users
//       </div>
//       <div style={{ display: "flex", }}>
//       <div>12 min ago</div>
//       <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDt9wXbzqrIBTLUub49y47DKjrgJVRrr-TCw&s"} style={{ width: 12, height: 12 }} />
//       </div>
//     </div>
//   </div>
//     <div style={{ fontSize: 15, marginTop: 4 }}>Download Notion and Be Productive</div>
//   </div>
// }