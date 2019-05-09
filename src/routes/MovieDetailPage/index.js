import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import MovieDetails from "../../components/MovieDetails";

const movieDetails = {
  url: "https://s2.ax1x.com/2019/05/07/EyJKv4.png",
  name: "雷  神 Thor: Ragnarok",
  type: "Action, Adventure, Drama",
  limit: "PG-13",
  year: 2019,
  time: 123,
  score: 8.9,
  directors: [
    "https://s2.ax1x.com/2019/05/07/EyJKv4.png",
    "https://s2.ax1x.com/2019/05/09/EgLvlj.png"
  ],
  starings: [
    "https://s2.ax1x.com/2019/05/09/EgOpmq.png",
    "https://s2.ax1x.com/2019/05/09/EgXzd0.png",
    "https://s2.ax1x.com/2019/05/09/EgjCJU.png",
    "https://s2.ax1x.com/2019/05/09/EgjAy9.png",
    "https://s2.ax1x.com/2019/05/09/Egjedx.png"
  ]
};

class MovieDetailPage extends PureComponent {
  render() {
    const {movieId} = this.props.match.params;
    return (
        <div className={styles.whole}>
          <MovieDetails
              id={movieId}
              url={movieDetails.url}
              name={movieDetails.name}
              type={movieDetails.type}
              limit={movieDetails.limit}
              year={movieDetails.year}
              time={movieDetails.time}
              score={movieDetails.score}
              directors={movieDetails.directors}
              starings={movieDetails.starings}
          />
        </div>
    )
  };
}

export default WithHeaderFooter(MovieDetailPage);
