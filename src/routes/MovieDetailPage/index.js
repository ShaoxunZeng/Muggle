import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import MovieDetails from "../../components/MovieDetails";

const movieDetails = {
  url: "https://s2.ax1x.com/2019/04/01/AyCRGq.png"
};

class MovieDetailPage extends PureComponent {
  render() {
    const { movieId } = this.props.match.params;
    return (
        <div className={styles.whole}>
          <MovieDetails url={movieDetails.url} id={movieId}/>
        </div>
    )
  };
}

export default WithHeaderFooter(MovieDetailPage);
