import React, {Component} from "react";
import styles from './index.module.less';
import Rater from "../Rater";

class MovieDetails extends Component {
  render() {
    const {url, name, type, limit, year, time, score} = this.props;
    return (
        <div className={styles.whole}>
          <div className={styles['image-container']}>
            <img className={styles.image} src={url} alt=""/>
          </div>
          <div className={styles['details-container']}>
            <div className={styles.name}>{name}</div>
            <div className={styles.type}>{type}</div>
            <div className={styles['limit-year-time-container']}>
              <div className={styles.limit}>{limit}</div>
              <div className={styles.dot}/>
              <div className={styles.year}>{year}</div>
              <div className={styles.dot}/>
              <div className={styles.time}>{time + " min"}</div>
            </div>
            <div className={styles['score-rater-container']}>
              <div className={styles.score}>{score}</div>
              <div className={styles.rater}>
                <Rater />
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default MovieDetails;
