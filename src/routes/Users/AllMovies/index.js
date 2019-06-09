import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../../components/WithHeaderFooter";
import {Col, Row} from "antd";
import AddNew from "../../../components/AddNew";
import OnShelfCard from "../../../components/OnShelfCard";

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


class AllMovies extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movieOnShelfList: [],
        }
    };

    componentWillMount() {
        //todo() 调用接口4
        // getMoviesOnShelf()
        this.setState({
            movieOnShelfList: testAllMovieOnShelf
        })
    };


    toDetailPage = (movieId) => {
        this.props.history.push(`/moviedetails/${movieId}`)
    };


    render() {
        const {movieOnShelfList} = this.state;

        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <div className={styles['main-body']}>
                        <div className={styles.mainPage}>
                            <Row className={styles.row}>
                                {
                                    movieOnShelfList.map((movieOnShelf) =>
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
