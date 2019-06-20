import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {Icon, Input, Row, Col} from "antd";
import {getMovieDetails, getMoviesOnShelf} from "../../../services/apiMovies";
import OnShelfCard from "../../../components/OnShelfCard";
import AddNew from "../../../components/AddNew";
import NewMovie from "./components/NewMovie";
import MovieInfo from "./components/MovieInfo";
import {delMovieOnShelf} from "../../../services/apiOnShelf";
import Button from "../../../components/Button";

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

const testMovieInfo = {
    movieId: 1,
    posterUrl: "https://s2.ax1x.com/2019/05/07/EyJKv4.png",
    movieName: "雷  神 Thor: Ragnarok",
    movieType: "Action, Adventure, Drama",
    country: "USA",
    language: 'English',
    year: 2019,
    length: 123,
    score: 8.9,
    description: '电影描述',
    dateOnShow: '2019-06-06', //上映日期
    visibleDate: '2019-06-10', // 排片信息观众可见时间
    status: 1, //电影状态，0: 未上映，1: 上映中，2: 已结束
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


class Onshelf extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            movieOnShelfList: [],
            showMainPage: true,
            showAddMoviePage: false,
            showMovieInfoPage: false,
            currentMovieInfo: testMovieInfo
        }
    };

    componentWillMount() {

        getMoviesOnShelf().then((res) => {
            this.setState({
                movieOnShelfList: res,
            });
            // console.log(res[0].movieId)
        });
        // this.setState({
        //   movieOnShelfList: testAllMovieOnShelf
        // })
    };


    showDetailPage = () => {
        this.setState({
            showMainPage: false,
            showMovieInfoPage: true,
        })
    };

    toDetailPage = (movieId) => {
        getMovieDetails(movieId).then(res => {
                this.setState({
                    currentMovieInfo: res
                });
                console.log(res);
                setTimeout(this.showDetailPage, 300)
            }
        );
    };

    delMovie = (movieId) => {
        delMovieOnShelf(
            {'movieId': movieId}).then(res => {
            console.log(res);
            alert('下架成功！');
            setTimeout(window.location.href = "/manage/onshelf", 1000)
        }).catch(err => {
            alert('该电影当前有排片，无法下架');
            console.log(err)
        })
    };

    closeMovieInfoPage() {
        this.setState({
            showMovieInfoPage: false,
            showMainPage: true
        })
    }

    addMovie() {
        this.setState({
            showMainPage: false,
            showAddMoviePage: true
        });
        console.log('addMovie')
    }

    closeAddMoviePage() {
        this.setState({
            showAddMoviePage: false,
            showMainPage: true
        })
    }

    handleSearch = (value) => {
        this.setState({
            movieOnShelfList: this.state.movieOnShelfList.filter(movie => movie.movieName.indexOf(value) !== -1)
        })
    };

    render() {
        const {movieOnShelfList, showMainPage, showMovieInfoPage, showAddMoviePage, currentMovieId, currentMovieInfo} = this.state;
        return (
            <div className={styles.whole}>
                <Input
                    placeholder="Search Movies"
                    onSearch={value => this.handleSearch(value)}
                    prefix={<Icon type="search" style={{color: 'rgb(255,255,255)'}}/>}
                    className={styles.input}
                />
                <div className={styles.underline}/>

                <div className={styles['main-body']}>
                    <div className={showMainPage ? styles.mainPage : styles.hidden}>
                        <Row className={styles.row}>
                            {
                                movieOnShelfList.map((movieOnShelf, index) =>
                                    <Col span={6} style={{marginBottom: 40}}>
                                        {index === 0 ?
                                            <div className={styles.addNew}
                                                 onClick={this.addMovie.bind(this)}><AddNew/>
                                            </div> : null}

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
                                        <div style={{marginLeft: 20, marginTop: 10}}>
                                            <Button type={'gray'}
                                                    onClick={() => this.delMovie(movieOnShelf.movieId)}>
                                                下架电影
                                            </Button>
                                        </div>
                                    </Col>)
                            }
                        </Row>
                    </div>
                    <div className={showAddMoviePage ? styles['add-movie'] : styles.hidden}>
                        <NewMovie closeAddMoviePage={this.closeAddMoviePage.bind(this)}/>
                    </div>
                    <div className={showMovieInfoPage ? styles['movie-info'] : styles.hidden}>
                        <MovieInfo movieId={currentMovieId} movieInfo={currentMovieInfo}/>
                    </div>

                </div>

            </div>
        )
    }
    ;
}

export default WithSider(Onshelf);
