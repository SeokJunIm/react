import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  // 렌더링 될떄마다 매번 실행됨
  useEffect(() => {
    console.log("카운트랜더링");
  }, [count]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span> name: {name}</span>
    </div>
  );
}

export default App;
