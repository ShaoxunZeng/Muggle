import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../../components/WithHeaderFooter";
import MovieDetails from "../../../components/MovieDetails";

const movieDetails = {
  posterUrl: "https://s2.ax1x.com/2019/05/07/EyJKv4.png",
  // posterUrl: "https://s2.ax1x.com/2019/05/21/VSWMHP.png",  // 测试图片
  movieName: "雷  神 Thor: Ragnarok",
  movieType: "Action, Adventure, Drama",
  year: 2019,
  length: 123,
  score: 8.9,
  directors: [{
    name: "雷神",
    url: "https://s2.ax1x.com/2019/05/07/EyJKv4.png"
  }, {
    name: "李爹",
    url: "https://s2.ax1x.com/2019/05/09/EgLvlj.png"
  }],
  starrings: [{
    name: "国照",
    url: "https://s2.ax1x.com/2019/05/09/EgOpmq.png"
  }, {
    name: "姜神",
    url: "https://s2.ax1x.com/2019/05/09/EgXzd0.png"
  }, {
    name: "耿爷",
    url: "https://s2.ax1x.com/2019/05/09/EgjCJU.png"
  }, {
    name: "羊男",
    url: "https://s2.ax1x.com/2019/05/09/EgjAy9.png"
  }, {
    name: "鹿女",
    url: "https://s2.ax1x.com/2019/05/09/Egjedx.png"
  }]
};

class MovieDetailPage extends PureComponent {
  render() {
    const {movieId} = this.props.match.params;
    return (
        <div className={styles.whole}>
          <MovieDetails
              movieId={movieId}
              posterUrl={movieDetails.posterUrl}
              movieName={movieDetails.movieName}
              movieType={movieDetails.movieType}
              year={movieDetails.year}
              length={movieDetails.length}
              score={movieDetails.score}
              directors={movieDetails.directors}
              starrings={movieDetails.starrings}
          />
        </div>
    )
  };
}

export default WithHeaderFooter(MovieDetailPage);
