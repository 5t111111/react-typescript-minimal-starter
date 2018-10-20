import * as React from "react";
import * as ReactDOM from "react-dom";

export interface HelloProps {
  content: string;
}

export default class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>{this.props.content}</div>;
  }
}

ReactDOM.render(
  <Hello content="Hello, world" />,
  document.getElementById("app")
);
