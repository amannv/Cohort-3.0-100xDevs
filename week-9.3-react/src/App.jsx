import { useEffect, useState } from "react";
import { PostComponent } from "./post";

function App() {

    const [CurrentTab, setCurrentTab] = useState(1);
    const [TabData, setTabData] = useState({});
    const [Loading, setLoading] = useState(true);



    useEffect(function() {
    async function fetchData() {
        setLoading(true);
       const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + CurrentTab);
        const json = await response.json();
        setTabData(json);
        setLoading(false);
        }
        fetchData();
}, [CurrentTab]);

   return (
    <div>
        <button onClick={function(){
            setCurrentTab(1);
        }} style={{color: CurrentTab == 1 ? "red" : "black"}}>Todo #1</button>
        <button onClick={function(){
            setCurrentTab(2);
        }} style={{color: CurrentTab == 2 ? "red" : "black"}}>Todo #2</button>
        <button onClick={function() {
            setCurrentTab(3);
        }} style={{color: CurrentTab == 3 ? "red" : "black"}}>Todo #3</button>
        <button onClick={function() {
            setCurrentTab(4);
        }} style={{color: CurrentTab == 4 ? "red" : "black"}}>Todo #4</button>
        <div>
            { Loading ? "Loading..." : TabData.title }
        </div>
    </div>
   )
}

export default App