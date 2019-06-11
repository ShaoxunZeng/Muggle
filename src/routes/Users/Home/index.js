import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import ImageBoard from "../../../components/ImageBoard";
import RecentMoives from "../../../components/RecentMovies";
import Button from "../../../components/Button";
import WithHeaderFooter from "../../../components/WithHeaderFooter";
import {getPopularMovies} from "../../../services/apiMovies";

let testInfo = {
    posterUrl: 'https://s2.ax1x.com/2019/04/01/AyCRGq.png',
    movieId: 1, // 电影Id
    movieName: '',// 电影名称
    movieType: '',// 电影类别（动作片）
    movieYear: 2019,// 电影年份
    movieLength: 0,// 电影时长
    movieDescription: '',// 电影简介
};
let popularMovies = Array(7).fill(testInfo);

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            popularMovies: [],
            posterUrls: []
        }
    }

    componentWillMount() {

        getPopularMovies().then(res => {
                console.log(res);
                this.setState({
                    //popularMovies: res,
                    posterUrls: res.map((movieInfo) => movieInfo.posterUrl)
                })
            }
        );
        // this.setState({
        //     popularMovies: popularMovies,
        //     posterUrls: popularMovies.map((movieInfo) => movieInfo.posterUrl)
        // })
    }

    render() {
        const {posterUrls} = this.state;
        console.log(posterUrls);
        return (
            <div className={styles.whole}>
                <div className={styles["image-board"]}>
                    <ImageBoard posterUrls={posterUrls}/>
                </div>
                <div className={styles["recent-movies"]}>
                    <RecentMoives/>
                </div>
                <Button type="gray"> 立即购买 </Button>
            </div>
        )
    };
}

export default WithHeaderFooter(Home);
