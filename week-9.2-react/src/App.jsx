import { useState, useEffect } from "react";


//re-learning about cleanup, dependencies, useeffect
function App() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount2(count2 - 1);
  }

return <div>
  <Counter count={count} count2={count2}></Counter>
  <button onClick={increase}>Increase!</button>
  <button onClick={decrease}>Decrease!</button>
</div>

}

//mounting, re-rendering, unmounting
function Counter(props) {

  useEffect(function(){
    console.log("Mount");

    return function() {
      console.log("Unmount");
    }
  }, []);

  useEffect(function() {
    console.log("Prop is changed!");

    return function() {
      console.log("Cleanup happend")
    }
  }, [props.count, props.count2]);

  return <div>
    Counter 1 = {props.count} <br />
    Counter 2 = {props.count2} <br /> 
  </div>
}

export default App
