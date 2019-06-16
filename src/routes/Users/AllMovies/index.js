import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../../components/WithHeaderFooter";
import {Col, Row, Input} from "antd";
import OnShelfCard from "../../../components/OnShelfCard";
import {getMoviesOnShelf} from "../../../services/apiMovies";

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
    movieName: '奥迪',// 电影名称
    movieType: '动作片',// 电影类别（动作片）
    movieYear: 2019,// 电影年份
    movieLength: 100,// 电影时长
    posterUrl: 'https://s2.ax1x.com/2019/05/31/VQrg6s.png'
  },
  {
    isOnShow: true,// 已上映、未上映
    movieId: 4, // 电影Id
    movieName: '雷神安德森',// 电影名称
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


class AllMovies extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieOnShelfList: [],
      currentMovieOnShelfList: []
    }
  };

  componentWillMount() {
    // getMoviesOnShelf().then((res) => {
    //   this.setState({
    //     movieOnShelfList: res,
    //     currentMovieOnShelfList: res
    //   })
    // });
    this.setState({
      movieOnShelfList: testAllMovieOnShelf,
      currentMovieOnShelfList: testAllMovieOnShelf
    })
  };


  toDetailPage = (movieId) => {
    this.props.history.push(`/moviedetails/${movieId}`)
  };

  handleSearch = (value) => {
    alert(value);
    this.setState({
      currentMovieOnShelfList: testAllMovieOnShelf.filter(movie => movie.movieName.indexOf(value) !== -1)
    })
  };

  render() {
    const {currentMovieOnShelfList} = this.state;

    return (
        <div className={styles.whole}>
          <div className={styles.wrapper}>
            <div className={styles['main-body']}>
              <div className={styles.mainPage}>
                <Input.Search
                    placeholder="input search text"
                    onSearch={value => this.handleSearch(value)}
                    style={{ width: 200 }}
                />
                <Row className={styles.row}>
                  {
                    currentMovieOnShelfList.map((movieOnShelf) =>
                        <Col span={6}>
                          {/*todo() 解决bug */}
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
            </div>
          </div>
        </div>
    )
  };
}

export default WithHeaderFooter(AllMovies);
