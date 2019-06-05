import React, {Component} from 'react'
import styles from './index.module.less';
import {getMovieInfoList} from "../../services/apiMovies";


class CouponCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            couponName, couponDescription, couponDiscount,
            couponThreshold, couponStartTime, couponEndTime
        } = this.props;


        return (
            <div className={styles.whole}>
                <div className={styles['title-container']}>
                    <div className={styles.title}>
                        <span className={styles.couponName}>{couponName}</span>
                        <span className={styles.couponDescription}>{couponDescription}</span>
                    </div>
                    {/*<div className={styles.movieNames}>*/}
                        {/*<span className={styles.hintText}>适用电影:</span>*/}
                        {/*<span className={styles.text}>*/}
                            {/*{*/}
                                {/*movieNames.length === 0 ? '所有电影' : movieNames.join(',')*/}
                            {/*}*/}
                        {/*</span>*/}
                    {/*</div>*/}
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
