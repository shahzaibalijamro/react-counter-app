import { useState } from "react";

function App() {
  const [num, newNum] = useState(0);
  function addCounter() {
    newNum(num + 1)
  }
  function subtractCounter() {
    newNum(num - 1)
  }
  function resetCounter() {
    newNum(0)
  }
  return (
    <>
    <div className="flex items-center justify-center h-[90vh]">
      <div>
      <h1 className="text-center m-0 text-[2rem]">Counter using React</h1>
      <div className="text-center mt-3 mb-4 text-[2rem]">
        <h1>{num}</h1>
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <button className="btn text-white btn-primary" onClick={addCounter}>Add</button>
        <button className="btn text-black btn-warning" onClick={subtractCounter}>Sub</button>
        <button className="btn text-white bg-[red]" onClick={resetCounter}>Reset</button>
      </div>
      </div>
    </div>
    </>
  )
}
export default App