import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate", count);
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate", count);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
