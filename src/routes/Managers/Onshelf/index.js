import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {Icon, Input, Row, Col} from "antd";
import {getMoviesOnShelf} from "../../../services/apiMovies";
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

class Onshelf extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            movieOnShelfList: [],
            showMainPage: true,
            showAddMoviePage: false,
            showMovieInfoPage: false,
            currentMovieId: 0
        }
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
    };

    toDetailPage = (movieId) => {
        this.setState({
            showMainPage: false,
            showMovieInfoPage: true,
            currentMovieId: movieId
        });
    };

    delMovie = (movieId) => {
        delMovieOnShelf(
            {'movieId': movieId}).then(res => {
            console.log(res);
            alert('下架成功！')
        }).catch(err => {
            alert('该电影当前有排片，无法下架')
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

    render() {
        const {movieOnShelfList, showMainPage, showMovieInfoPage, showAddMoviePage, currentMovieId} = this.state;
        return (
            <div className={styles.whole}>
                <Input
                    placeholder="Search Movies"
                    prefix={<Icon type="search" style={{color: 'rgb(255,255,255)'}}/>}
                    className={styles.input}
                />
                <div className={styles.underline}/>

                <div className={styles['main-body']}>
                    <div className={showMainPage ? styles.mainPage : styles.hidden}>
                        <Row className={styles.row}>
                            {
                                movieOnShelfList.map((movieOnShelf, index) =>
                                    <Col span={6} style={{marginBottom:40}}>
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
                                        <div style={{marginLeft:20}}>
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
                        <MovieInfo movieId={currentMovieId}/>
                    </div>
                </div>

            </div>
        )
    };
}

export default WithSider(Onshelf);
