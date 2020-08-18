import React from "react";
import logo from "./logo.svg";
import "./App.css";

class ComingSoon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "COMING SOON",
    };
  }
  componentDidMount() {
    const stopper = this.state.text + "!!!";

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: "COMING SOON" }))
        : this.setState((prevState) => ({ text: prevState.text + "!" }));
    }, 400);
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
          <ComingSoon />
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UChV9LIbhVgQoROuFZK_wmPQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teach me piano
        </a>
      </header>
    </div>
  );
}

export default App;
