import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";
import {Col, Icon, Input, Row} from "antd";
import AddNew from "../../../components/AddNew";
import OnShelfCard from "../../../components/OnShelfCard";
import NewMovie from "../Onshelf/components/NewMovie";
import MovieInfo from "../Onshelf/components/MovieInfo";
import {getMovieLikeNumById} from "../../../services/apiStatistic";
import {getMoviesOnShelf} from "../../../services/apiMovies";

const data = [
  {
    favorNums: 1,
    date: "2019-01-01"
  },
  {
    favorNums: 10,
    date: "2019-01-02"
  },
  {
    favorNums: 10,
    date: "2019-01-03"
  },
  {
    favorNums: 10,
    date: "2019-01-04"
  },
  {
    favorNums: 10,
    date: "2019-01-05"
  },
  {
    favorNums: 10,
    date: "2019-01-06"
  },
  {
    favorNums: 10,
    date: "2019-01-07"
  },
  {
    favorNums: 10,
    date: "2019-01-08"
  },
  {
    favorNums: 10,
    date: "2019-01-09"
  }
];

const testAllMovieOnShelf = [
  {
    isOnShow: true,// 已上映、未上映
    movieId: 1, // 电影Id
    movieName: '雷神',// 电影名称
    movieType: '动作片',// 电影类别（动作片）
    movieYear: 2019,// 电影年份
    movieLength: 100,// 电影时长
    posterUrl: 'https://s2.ax1x.com/2019/05/31/VQrg6s.png'
  },
  {
    isOnShow: false,// 已上映、未上映
    movieId: 2, // 电影Id
    movieName: '雷神',// 电影名称
    movieType: '动作片',// 电影类别（动作片）
    movieYear: 2019,// 电影年份
    movieLength: 100,// 电影时长
    posterUrl: 'https://s2.ax1x.com/2019/05/31/VQrg6s.png'
  },
  {
    isOnShow: true,// 已上映、未上映
    movieId: 3, // 电影Id
    movieName: '雷神',// 电影名称
    movieType: '动作片',// 电影类别（动作片）
    movieYear: 2019,// 电影年份
    movieLength: 100,// 电影时长
    posterUrl: 'https://s2.ax1x.com/2019/05/31/VQrg6s.png'
  },
  {
    isOnShow: true,// 已上映、未上映
    movieId: 4, // 电影Id
    movieName: '雷神',// 电影名称
    movieType: '动作片',// 电影类别（动作片）
    movieYear: 2019,// 电影年份
    movieLength: 100,// 电影时长
    posterUrl: 'https://s2.ax1x.com/2019/05/31/VQrg6s.png'
  },
  {
    isOnShow: false,// 已上映、未上映
    movieId: 5, // 电影Id
    movieName: '雷神',// 电影名称
    movieType: '动作片',// 电影类别（动作片）
    movieYear: 2019,// 电影年份
    movieLength: 100,// 电影时长
    posterUrl: 'https://s2.ax1x.com/2019/05/31/VQrg6s.png'
  },
];

class Statistic extends React.Component {
  state = {
    chartVisible: "none",
    movieOnShelfList: [],
    currentMovieId: "",
    data: ""
  };

  componentWillMount() {
    getMoviesOnShelf().then((res) => {
        this.setState({
            movieOnShelfList: res
        })
    });
    // this.setState({
    //   movieOnShelfList: testAllMovieOnShelf
    // })
  }

  toDetailPage = (movieId) => {
    // TODO
    //  根据movieId请求数据
    getMovieLikeNumById(movieId).then((res) => {
      this.setState({
        chartVisible: "",
        currentMovieId: movieId,
        data: res
      });
    });
    // this.setState({
    //   chartVisible: "",
    //   currentMovieId: movieId,
    //   data: data
    // });
  };

  render() {
    const {chartVisible, movieOnShelfList, currentMovieId, data} = this.state;
    return (
        <div>
          <div className={styles.whole}>
            <div className={styles['main-body']}>
              <div className={chartVisible === "none" ? styles.mainPage : styles.hidden}>
                <Row className={styles.row}>
                  {
                    movieOnShelfList.map((movieOnShelf, index) =>
                        <Col span={6}>

                          <div onClick={() => this.toDetailPage(movieOnShelf.movieId)}>
                            <OnShelfCard
                                posterUrl={movieOnShelf.posterUrl}
                                movieName={movieOnShelf.movieName}
                                movieYear={movieOnShelf.movieYear}
                                movieLength={movieOnShelf.movieLength}
                                movieType={movieOnShelf.movieType}
                                isOnshow={movieOnShelf.isOnShow}
                                movieId={movieOnShelf.movieId}/>
                          </div>
                        </Col>)
                  }
                </Row>
              </div>
              <div className={styles.whole} style={{display: this.state.chartVisible}}>
                {movieOnShelfList.map((movieOnShelf) => movieOnShelf.movieId === currentMovieId
                    ? <OnShelfCard
                        posterUrl={movieOnShelf.posterUrl}
                        movieName={movieOnShelf.movieName}
                        movieYear={movieOnShelf.movieYear}
                        movieLength={movieOnShelf.movieLength}
                        movieType={movieOnShelf.movieType}
                        isOnshow={movieOnShelf.isOnShow}
                        movieId={movieOnShelf.movieId}/>
                    : "")}
                <Chart height={400} data={data} forceFit className={styles.chart}>
                  <Axis name="favorNums"/>
                  <Axis name="date"/>
                  <Tooltip
                      crosshairs={{
                        type: "y"
                      }}
                  />
                  <Geom type="line" position="date*favorNums" size={2} style={{stroke: "#FFEB9E"}}/>
                  <Geom
                      type="point"
                      position="date*favorNums"
                      size={4}
                      shape={"circle"}
                      style={{
                        stroke: "#FFEB9E",
                        lineWidth: 1,
                        fill: "#FFEB9E"
                      }}
                  />
                </Chart>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default WithSider(Statistic);
