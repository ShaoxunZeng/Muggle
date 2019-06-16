import React, {Component} from 'react'
import styles from './index.module.less';
import Button from "../../../../../components/Button";
import {Popover} from "antd";


class MovieInfo extends Component {
    constructor(props) {
        super(props);
    }

    getStatus = (status) => {
        let text = '';
        switch (status) {
            case 1:
                text = '未上映';
                break;
            case 2:
                text = '热映中';
                break;
            case 3:
                text = '已下架';
                break;
        }
        return text;
    };


    // () {
    //     getMovieDetails(this.props.movieId).then(res=>{
    //         this.setState({
    //             movieInfo: res
    //         })
    //     });
    // console.log(this.props.movieId);


    render() {
        const {movieInfo} = this.props;
        return (
            <div className={styles.whole} onClick={this.props.onClick}>
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
                        {/*<div className={styles['i-like']}>+添加到我喜欢</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieInfo;
