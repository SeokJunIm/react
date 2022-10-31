import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import StyledA from "./components/StyledA";
import styled from "styled-components";
import { GithubOutlined } from "@ant-design/icons";
import ControlledComponent from "./components/ControlledComponent";
import UnControlledComponent from "./components/UncontrolledCompoenet";

const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`;

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledComponent />
        <UnControlledComponent />
      </header>
    </div>
  );
}

export default App;
