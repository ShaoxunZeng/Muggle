import React, {Component} from 'react'
import styles from './index.module.less';
import {Tag} from 'antd'

class MarkCard extends Component {
    constructor(props) {
        super(props);
    }

    userStatusTab = (userStatus) => {
        let color, text;
        switch (userStatus) {
            case 1:
                color = 'yellow';
                text = '已观看';
                break;
            case 2:
                color = 'gray';
                text = '未观看';
                break;

        }
        return {'color': color, 'text': text}

    };
    movieStatusTab = (movieStatus) => {
        let color, text;
        switch (movieStatus) {
            case 1:
                color = 'gold';
                text = '即将上映';
                break;
            case 2:
                color = 'yellow';
                text = '正在热映';
                break;
            case 3:
                color = 'gray';
                text = '已下架';
                break;

        }
        return {'color': color, 'text': text}
    };


    render() {
        const {posterUrl, movieName, movieYear, movieLength, userStatus, movieStatus} = this.props;
        return (
            <div className={styles.whole}>
                <div className={styles['image-container']}>
                    <img className={styles.image} src={posterUrl} alt='海报'/>
                </div>
                <div className={styles['info-container']}>
                    <div className={styles.movieName}>{movieName}</div>
                    <div className={styles['year-time-container']}>
                        {movieYear}
                        <div className={styles.dot}/>
                        {movieLength} min
                    </div>
                    <div className={styles['status-container']}>
                        <Tag color={this.userStatusTab(userStatus).color}>{this.userStatusTab(userStatus).text}</Tag>
                        <Tag color={this.movieStatusTab(movieStatus).color}>{this.movieStatusTab(movieStatus).text}</Tag>
                    </div>
                </div>

            </div>
        )
    }

}

export default MarkCard
