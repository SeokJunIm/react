import React from "react";

class UnControlledComponent extends React.Component {
  inputRef = React.createRef();

  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.click}> 전송</button>
      </div>
    );
  }

  click = () => {
    // input  엘리먼트의 현재 상태 값 (value) 를 꺼내서 전송
    // const input = document.querySelector("#my-input");
    // console.log(input);
  };
}

export default UnControlledComponent;
