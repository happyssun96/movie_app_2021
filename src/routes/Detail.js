import React from "react";
import "./Detail.css";
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <h2>{location.state.title}</h2>
          <h5>{location.state.year}</h5>
          <ul className="movie__genres">
            {location.state.genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <br />
          <span>{location.state.summary}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
