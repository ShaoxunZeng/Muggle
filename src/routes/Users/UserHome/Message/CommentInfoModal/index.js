import React, {Component} from 'react'
import {Modal, Input} from "antd";
import styles from './index.module.less'
import MovieDetails from "../../../../../components/MovieDetails";
import {getMovieDetails} from "../../../../../services/apiMovies";
import Rater from "../../../../../components/Rater";
import Button from "../../../../../components/Button";

const {TextArea} = Input;
const testMovieInfo = {
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

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
            rate:10
        }
    }

    handleCancel = () => {
        this.props.closeCommentInfoModal();
    };

    componentWillMount() {
        const {movieId} = this.props;
        //Todo() 调用接口5 获取某部电影详情
        // getMovieDetails(movieId);
        this.setState({
            movieInfo: testMovieInfo,
        });
    }

    handleTextChange = (e) => {
        this.setState({
            commentText: e.target.value
        })
    };

    handleRateChange=(value)=>{
        console.log(value);
        this.setState({
            rate:value
        })
    };

    submitComment = () => {
        let comment = {
            movieId: this.props.movieId,
            rate: this.state.rate, //评分0-10
            comment: this.state.commentText
        };
        console.log(comment);
        this.props.closeCommentInfoModal();
        //todo() 调用接口35. 发送电影评级
        //  sendComment(comment)

    };



    render() {
        const {commentFormVisible} = this.props;
        const {movieInfo, commentText} = this.state;
        return (
            <div>
                <Modal
                    title={'电影评价'}
                    visible={commentFormVisible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <div className={styles.whole}>
                        <div className={styles.movieInfo}>
                            <div className={styles['image-container']}>
                                <img className={styles.image} src={movieInfo.posterUrl} alt=''/>
                            </div>
                            <div className={styles['details-container']}>
                                <div className={styles.name}>{movieInfo.movieName}</div>
                                <div className={styles.type}>{movieInfo.movieType}</div>
                                <div className={styles['year-time-container']}>
                                    <div className={styles.year}>{movieInfo.year}</div>
                                    <div className={styles.dot}/>
                                    <div className={styles.time}>{movieInfo.length + " min"}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.comment}>

                            <p className={styles.text}>Rate</p>
                            <div className={styles.rater}>
                                <Rater handleRateChange={this.handleRateChange}/>
                            </div>
                            <p className={styles.text}>Comment</p>
                            <div className={styles.input}>
                                <TextArea style={{backgroundColor: '#1e1e1e', border: 0, borderRadius: 5 + 'px'}}
                                          rows={4}
                                          value={commentText}
                                          onChange={this.handleTextChange}
                                />
                            </div>
                            <div className={styles.button}>
                                <Button type={'yellow'} onClick={this.submitComment.bind(this)}>评价</Button>
                            </div>

                        </div>
                    </div>


                </Modal>
            </div>
        )
    }
}

export default Index
