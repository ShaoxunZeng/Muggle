import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../../components/WithHeaderFooter";
import MovieDetails from "../../../components/MovieDetails";
import {getMovieComment, getMovieDetails} from "../../../services/apiMovies";
import MovieComment from "../../../components/MovieComment";

const movieDetails = {
    movieId: 1,
    posterUrl: "https://s2.ax1x.com/2019/05/07/EyJKv4.png",
    // posterUrl: "https://s2.ax1x.com/2019/05/21/VSWMHP.png",  // 测试图片
    movieName: "雷  神 Thor: Ragnarok",
    movieType: "Action, Adventure, Drama",
    year: 2019,
    length: 123,
    score: 8.9,
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

const testMovieComment = [
    {
        username: 'userA',
        time: '2091-01-01 14:36', //评论时间
        comment: ''
    },
    {
        username: 'userB',
        time: '2091-01-01 14:36', //评论时间
        comment: ''
    },
    {
        username: 'userC',
        time: '2091-01-01 14:36', //评论时间
        comment: ''
    }
];

class MovieDetailPage extends PureComponent {
    state = {
        movieDetails: {},
        isLoading: true,
        movieComment: []
    };

    componentWillMount() {
        const {movieId} = this.props.match.params;
        getMovieDetails(movieId).then((movieDetails) => {
          this.setState({
            movieDetails: movieDetails,
            isLoading: false
          });
        });

        //todo() 调用接口36 查看电影评价
        // getMovieComment(movieId).then(movieComment=>{
        //   this.setState({
        //       movieComment:movieComment
        //   })
        // });
        this.setState({
           // movieDetails: movieDetails,
           // isLoading: false,
            movieComment: testMovieComment
        });
    }

    render() {
        const {movieDetails, isLoading,movieComment} = this.state;
        return isLoading ? "" : (
            <div className={styles.whole}>
                <MovieDetails
                    movieId={movieDetails.movieId}
                    posterUrl={movieDetails.posterUrl}
                    movieName={movieDetails.movieName}
                    movieType={movieDetails.movieType}
                    year={movieDetails.year}
                    length={movieDetails.length}
                    score={movieDetails.score}
                    directors={movieDetails.directors}
                    starrings={movieDetails.starrings}
                />
                <div className={styles.movieComment}>
                    <MovieComment movieComment={movieComment}/>
                </div>
            </div>
        )
    };
}

export default WithHeaderFooter(MovieDetailPage);
