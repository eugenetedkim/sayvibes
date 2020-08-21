import React from "react";
import "./App.css";

const API = "AIzaSyAkaRfqVO-Hi0QzJdXYyaPyTAMBIsSxCVc";
const channelID = "UChV9LIbhVgQoROuFZK_wmPQ";
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Vibes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultyt: [],
    };
  }

  componentDidMount() {
    fetch(finalURL)
      .then((response) => response.json())
      .then((json) => {
        const resultyt = json.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Vibes</h1>
        {this.state.resultyt.map((link, i) => {
          console.log(link);
          var frame = (
            <div className="vibes">
              <iframe
                key={i}
                width="560"
                height="315"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
          return frame;
        })}
        {this.frame}
      </div>
    );
  }
}

export default Vibes;
