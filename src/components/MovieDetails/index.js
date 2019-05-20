import React, {Component} from "react";
import styles from './index.module.less';
import Rater from "../Rater";
import Button from "../Button";
import {withRouter} from "react-router-dom";
import {Popover} from "antd";

class MovieDetails extends Component {
  handleLikeButtonClick = function () {
    alert("已添加到我喜欢");
  };

  handleBuyButtonClick = function () {
    const {movieId} = this.props;
    this.props.history.push(`/movieorder/${movieId}`)
  };

  render() {
    const {posterUrl, movieName, movieType, year, length, score, directors, starrings} = this.props;
    return (
        <div className={styles.whole}>
          <div className={styles['image-container']}>
            <img className={styles.image} src={posterUrl} alt=""/>
          </div>
          <div className={styles['details-container']}>
            <div className={styles.header}>
              <div>
                <div className={styles.name}>{movieName}</div>
                <div className={styles.type}>{movieType}</div>
              </div>
              <div className={styles['buy-button']}>
                <Button type={'yellow'} onClick={() => this.handleBuyButtonClick()}>立即购买</Button>
              </div>
            </div>
            <div className={styles['year-time-container']}>
              <div className={styles.year}>{year}</div>
              <div className={styles.dot}/>
              <div className={styles.time}>{length + " min"}</div>
            </div>
            <div className={styles['score-rater-container']}>
              <div className={styles.score}>{score}</div>
            </div>
            <div className={styles.rater}>
              <div className={styles.trangle}/>
              <p className={styles.text}>给电影打分</p>
              <div className={styles.rater}>
                <Rater/>
              </div>
            </div>
            <div className={styles['roles-container']}>
              <div className={styles.director}>
                <div>导 演</div>
                <div className={styles['all-avators']}>
                  {directors.map(function (item) {
                    return (
                        <div className={styles['avator-container']}>
                          <Popover content={item.name}>
                            <img src={item.url} className={styles.img}/>
                          </Popover>
                        </div>
                    )
                  })}
                </div>
              </div>
              <div className={styles.staring}>
                <div>主 演</div>
                <div className={styles['all-avators']}>
                  {starrings.map(function (item) {
                    return (
                        <div className={styles['avator-container']}>
                          <Popover content={item.name}>
                            <img src={item.url} className={styles.img}/>
                          </Popover>
                        </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={styles['i-like']} onClick={() => this.handleLikeButtonClick()}>+添加到我喜欢</div>
          </div>
        </div>
    )
  }
}

export default withRouter(MovieDetails);
