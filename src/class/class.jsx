import React from "react";

class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    console.log("run constructor");
    this.state = {
      title: "",
    };
  }

  async componentDidMount() {
    console.log("run didmout");

    setTimeout(() => {
      this.setState({
        title: "hello",
      });
    }, 1000);
  }

  render() {
    console.log("run render: ");
    return <div style={{ fontSize: "50px" }}> title = {this.state.title}</div>;
  }
}

export default ClassExample;
