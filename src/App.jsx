import react, { useState } from 'react';
import Button from './Button';
import Todo from './Todo';
import Hookspractice from './Hookspractice';
import PractHeaders from './PractHeaders';
import HooksPractice2 from './HooksPractice2';
function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState([]);
  const [count2, setCount2] = useState(0)
  const addNum2 = (e) => {
    e.preventDefault();
    setCount2((count2) => count2 + 2)
    console.log(count2);
  }
  const addNum = (e) => {
    e.preventDefault();
    setCount((count) => count + 1)
  }
  const addInput = (e) => {
    e.preventDefault()
    setDisplay((display) => [...display, input])
    setInput("")

  }
  var arry1 = "harsh, jitendra, Agarwal";
  const newAarry1 = arry1.split(" ");
  // console.log(newAarry1);

  return (
    <>
    //Check out Hookspractice for seeing how useMemo or react.memo works it is used to prevent the re-rendering of elements when its props are unchanged.
      <HooksPractice2 />
      <Hookspractice />
      <PractHeaders title={"Hello World"} />
      <PractHeaders title={"Harry"} />
      <h2>{newAarry1}</h2>
      <h1>{count}</h1>
      <button onClick={addNum}>Add Number!</button>
      <br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <h2>{input}</h2>
      <h3>{display.join(' , ')}</h3>
      <button onClick={addInput}>Add Input</button>
      <h2>Another way using props</h2>
      <h3>{count2}</h3>
      <Button fn={addNum2} count2={count2} />
      <Todo />
      <br />
      <br />
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<TextComponent2 />} />

    </>
  )
}
function CardWrapper({ innerComponent }) {
  return <div style={{ border: "2px solid black", padding: "5px" }}>
    {innerComponent}
  </div>
}
function TextComponent() {
  return <div>Hi There!!</div>
}
function TextComponent2() {
  return <div>Hi There2!!</div>
}
export default App;
