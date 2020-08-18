import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Loading",
    };
  }
  componentDidMount() {
    const stopper = this.state.text + "...";

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: "Loading" }))
        : this.setState((prevState) => ({ text: prevState.text + "." }));
    }, 300);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return <p>{this.state.text}</p>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Loading />
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UChV9LIbhVgQoROuFZK_wmPQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          sayvibes
        </a>
      </header>
    </div>
  );
}

export default App;
