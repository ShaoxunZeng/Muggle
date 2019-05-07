import React, { Component } from "react";
import styles from './index.module.less';
import { withRouter } from "react-router-dom";

const movies = [{
  id: 1,
  url: "https://s2.ax1x.com/2019/04/01/Ayk8SI.png"
},{
  id: 2,
  url: "https://s2.ax1x.com/2019/04/01/Ayk8SI.png"
},{
  id: 3,
  url: "https://s2.ax1x.com/2019/04/01/Ayk8SI.png"
},{
  id: 4,
  url: "https://s2.ax1x.com/2019/04/01/Ayk8SI.png"
}
];

class ImageBoard extends Component {

  handleClick = movieId => {
    this.props.history.push(`/moviedetails/${movieId}`)
  };

  render() {
    return (
        <div className={styles.whole}>
          <div className={styles.header}>
            近期热片
          </div>
          <div className={styles['image-board']}>
            {movies.map( movie => (
                <div className={styles['image-container']}>
                  <img src={movie.url} onClick={() => this.handleClick(movie.id)}/>
                </div>
            ))}
          </div>
        </div>
    )
  }
}

export default withRouter(ImageBoard);
