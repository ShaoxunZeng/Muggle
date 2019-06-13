import React, {Component} from "react";
import styles from './index.module.less';
import {withRouter} from "react-router-dom";

const movies = [{
    id: 1,
    url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560404608887&di=ae78ea5babf63a806e342daa264ce5a9&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2FD%2FDA%2FDAD73EFD4B1ADBA93E21C8C1CA973188.jpg"
}, {
    id: 2,
    url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560404628895&di=b86267cca52dda2f6ab7e24311aef001&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2F1%2F18%2F18D3B0BCE16EF386F6D7B7E37CBD254D.jpg"
}, {
    id: 3,
    url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560404649828&di=d421df7ffdfb58b89520afc440b08af9&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2015%2F07%2F16%2Ff8f60bbe837823708d24094565aa5b4a.jpg"
}, {
    id: 4,
    url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560404663717&di=92f18dc12fa090eafe4f014a4b677418&imgtype=0&src=http%3A%2F%2Fy0.ifengimg.com%2Fa%2F2014_21%2F0c380efe1c2bc02.jpg"
}
];

class ImageBoard extends Component {

    handleClick = movieId => {
        this.props.history.push(`/moviedetails/${movieId}`)
    };

    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.header}>
                    近期热片
                </div>
                <div className={styles['image-board']}>
                    {movies.map(movie => (
                        <div className={styles['image-container']}>
                            <img src={movie.url} onClick={() => this.handleClick(movie.id)}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(ImageBoard);
