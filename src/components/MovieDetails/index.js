import React, { Component } from "react";
import styles from './index.module.less';

class MovieDetails extends Component {
  render() {
    const { url, id } = this.props;
    return (
        <div className={styles.whole}>
          <img src={url}/>
          <div>电影id:{id}</div>
        </div>
    )
  }
}

export default MovieDetails;
