import React, {Component} from 'react'
import styles from './index.module.less';
import {getMovieInfoList} from "../../services/apiMovies";

const testMovieDetailList = [
    {
        movieId: 1,
        movieName: '电影1',
        posterUrl: '',
        movieType: '',
        country: '',
        language: '',
        year: 2019, //年份
        length: 0, //时常
        description: '',
        status: 1, //电影状态，0: 未上映，1: 上映中，2: 已结束
        score: 1, //电影评分
        directors: [{
            name: '',
            url: ''
        }],
        starrings: [{
            name: '',
            url: ''
        }] //详情信息列表
    },
    {
        movieId: 2,
        movieName: '电影2',
        posterUrl: '',
        movieType: '',
        country: '',
        language: '',
        year: 2019, //年份
        length: 0, //时常
        description: '',
        status: 1, //电影状态，0: 未上映，1: 上映中，2: 已结束
        score: 1, //电影评分
        directors: [{
            name: '',
            url: ''
        }],
        starrings: [{
            name: '',
            url: ''
        }] //详情信息列表
    },
    {
        movieId: 3,
        movieName: '电影3',
        posterUrl: '',
        movieType: '',
        country: '',
        language: '',
        year: 2019, //年份
        length: 0, //时常
        description: '',
        status: 1, //电影状态，0: 未上映，1: 上映中，2: 已结束
        score: 1, //电影评分
        directors: [{
            name: '',
            url: ''
        }],
        starrings: [{
            name: '',
            url: ''
        }] //详情信息列表
    }

];

class CouponCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            moviesIncluded, couponName, couponDescription, couponDiscount,
            couponThreshold, couponStartTime, couponEndTime
        } = this.props;

        //TODO() 调用接口50 根据movieId列表获取movieName列表
        // const movieNames=getMovieInfoList(moviesIncluded).map(movieInfo=>movieInfo.movieName);

        const movieNames = moviesIncluded.length === 0 ? [] : testMovieDetailList.map(movieInfo => movieInfo.movieName);
        return (
            <div className={styles.whole}>
                <div className={styles['title-container']}>
                    <div className={styles.title}>
                        <span className={styles.couponName}>{couponName}</span>
                        <span className={styles.couponDescription}>{couponDescription}</span>
                    </div>
                    <div className={styles.movieNames}>
                        <span className={styles.hintText}>适用电影:</span>
                        <span className={styles.text}>
                            {
                                movieNames.length === 0 ? '所有电影' : movieNames.join(',')
                            }
                        </span>
                    </div>
                </div>
                <div className={styles['discount-container']}>
                    <div className={styles.money}>
                        <span className={styles.hintText}>满</span>
                        <span className={styles.text}>{couponThreshold}</span>
                        <span className={styles.hintText}>减</span>
                        <span className={styles.text}>{couponDiscount}</span>
                    </div>
                    <div className={styles.time}>
                        <span className={styles.hintText}>有效期: </span>
                        <span className={styles.text}>{couponStartTime}</span>
                        <span className={styles.hintText}>~</span>
                        <span className={styles.text}>{couponEndTime}</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default CouponCard
