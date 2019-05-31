import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";

class MovieInfoCard extends PureComponent {
  render() {
    const {movieName, price, posterUrl} = this.props;
    return (
        <div className={styles.whole}>
          <div className={styles['image-container']}>
            <img className={styles.image} src={posterUrl} alt=""/>
            <div className={styles.text}>
              <div>{movieName}</div>
              <div>{"¥" + price}</div>
            </div>
          </div>
        </div>
    )
  };
}

export default MovieInfoCard;
