import React, {Component} from 'react'
import styles from './index.module.less';
import {getMovieDetails} from "../../../../../services/apiMovies";
import Button from "../../../../../components/Button";
import {Popover} from "antd";

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


class MovieInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieInfo: {}
        }
    }

    getStatus = (status) => {
        let text = '';
        switch (status) {
            case 0:
                text = '未上映';
                break;
            case 1:
                text = '热映中';
                break;
            case 2:
                text = '已下架';
                break;
        }
        return text;
    };

    componentWillMount() {
        //         getMovieDetails(this.props.movieId).then(res=>{
        //             this.setState({
        //                 movieInfo: res
        //             })
        //
        // })
        this.setState({
            movieInfo: testMovieInfo
        })
    }

    // () {
    //     getMovieDetails(this.props.movieId).then(res=>{
    //         this.setState({
    //             movieInfo: res
    //         })
    //     });
    // console.log(this.props.movieId);


    render() {
        const {movieInfo} = this.state;
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <div className={styles['image-container']}>
                        <img className={styles.image} src={movieInfo.posterUrl} alt=""/>
                    </div>
                    <div className={styles['details-container']}>
                        <div className={styles.header}>
                            <div>
                                <div className={styles.name}>{movieInfo.movieName}</div>
                                <div className={styles.type}>{movieInfo.movieType}</div>
                            </div>
                            <div className={styles['buy-button']}>
                                <Button type={'yellow'}>{this.getStatus(movieInfo.status)}</Button>
                            </div>
                        </div>
                        <div className={styles['year-time-container']}>
                            <div className={styles.year}>{movieInfo.year}</div>
                            <div className={styles.dot}/>
                            <div className={styles.time}>{movieInfo.length + " min"}</div>
                        </div>
                        <div className={styles['score-rater-container']}>
                            <div className={styles.score}>{movieInfo.score}</div>
                        </div>

                        <div className={styles['roles-container']}>
                            <div className={styles.director}>
                                <div>导 演</div>
                                <div className={styles['all-avators']}>
                                    {movieInfo.directors.map(function (item) {
                                        return (
                                            <div className={styles['avator-container']}>
                                                <Popover content={item.name}>
                                                    <img src={item.url} className={styles.img} alt={'pic'}/>
                                                </Popover>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.staring}>
                                <div>主 演</div>
                                <div className={styles['all-avators']}>
                                    {movieInfo.starrings.map(function (item) {
                                        return (
                                            <div className={styles['avator-container']}>
                                                <Popover content={item.name}>
                                                    <img src={item.url} className={styles.img} alt={'pic'}/>
                                                </Popover>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={styles['i-like']}>+添加到我喜欢</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieInfo;
