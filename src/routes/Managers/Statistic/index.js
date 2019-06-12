import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {getMovieAttendanceById, getMovieBoxOfficeById, getMovieLikeNumById} from "../../../services/apiStatistic";

class Statistic extends PureComponent {
    componentWillMount() {
        getMovieLikeNumById(101).then(res => {
            console.log('movieLike');
            console.log(res)
        });
        getMovieBoxOfficeById(101).then(res => {
            console.log('boxOffice');
            console.log(res)
        });
        getMovieAttendanceById(101).then(res => {
            console.log('attendance');
            console.log(res)
        })
    }

    render() {
        return (
            <div className={styles.whole}>
                Statistic
            </div>
        )
    };
}

export default WithSider(Statistic);
