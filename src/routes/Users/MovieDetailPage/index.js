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
    description: '<雷神》的故事发生在现今的地球以及艾斯卡的奇幻世界。故事的中心人物是拥有强大神力的雷神托尔（Thor），但是他自大鲁莽的行为掀起了一场古老的战争，因此被贬入凡间作为惩罚，被迫与人类一同生活。托尔必须学会如何成为一个真正的英雄，才能对抗来自神界的强大黑暗势力。\n' +
        '《雷神》一片探讨一个人的传奇冒险，他从一个骄傲自大的神界王位继承人被贬入凡间，他必须成为一名超级英雄才能登上王位 ',
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
        comment: '《一出好戏》把人类进化史中最隐蔽的那面都模拟了一遍，从最初的氏族社会（以小王为首，大家组织在一起打猎采果为生），到以物易物的商品社会（张总依靠发现的船骸，完成原始资本的积累，建立了岛上的物品交换规则），最后是资本竞争后形成寡头政治（马进和小兴企图抵抗过这个规则，但屡屡挫败，最后利用这个规则的逻辑，垄断了物质资源，反客为主）。在最后时期，这个岛屿其实与现代社会无异，作为等价物存在的纸牌甚至如我们当下的货币一样开始贬值。'
    },
    {
        username: 'userB',
        time: '2091-01-01 14:36', //评论时间
        comment: '《一出好戏》把人类进化史中最隐蔽的那面都模拟了一遍，从最初的氏族社会（以小王为首，大家组织在一起打猎采果为生），到以物易物的商品社会（张总依靠发现的船骸，完成原始资本的积累，建立了岛上的物品交换规则），最后是资本竞争后形成寡头政治（马进和小兴企图抵抗过这个规则，但屡屡挫败，最后利用这个规则的逻辑，垄断了物质资源，反客为主）。在最后时期，这个岛屿其实与现代社会无异，作为等价物存在的纸牌甚至如我们当下的货币一样开始贬值。'
    },
    {
        username: 'userC',
        time: '2091-01-01 14:36', //评论时间
        comment: '很好看'
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

        getMovieComment(movieId).then(movieComment => {
            console.log(movieComment);
            this.setState({
                movieComment: movieComment
            })
        });
        // this.setState({
        //     movieDetails: movieDetails,
        //     isLoading: false,
        //     movieComment: testMovieComment
        // });
    }

    render() {
        const {movieDetails, isLoading, movieComment} = this.state;
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
                <div className={styles.movieDes}>
                    <div className={styles.title}>
                        <div className={styles['vertical-line']}/>
                        <div className={styles.text}>简介</div>
                    </div>
                    <div className={styles.content}>
                        {movieDetails.description}
                    </div>
                </div>
                <div className={styles.movieComment}>
                    <MovieComment movieComment={movieComment}/>
                </div>
            </div>
        )
    };
}

export default WithHeaderFooter(MovieDetailPage);
