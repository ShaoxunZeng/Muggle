import React, {Component} from 'react'
import styles from './index.module.less';
import {List, Avatar, Icon} from 'antd'

const IconText = ({type, text}) => (
    <span>
        <Icon type={type} style={{marginRight: 8, color: "#FFEB9E"}}/>
        <span style={{color: '#FFFFFF'}}>  {text}</span>
    </span>
);

class MovieComment extends Component {

    commentContent = (comment, time) => {
        return (
            <div>
                {comment + time}
            </div>
        )
    };


    render() {
        const {movieComment} = this.props;


        return (
            <div>
                <List
                    className="commentList"
                    itemLayout="horizontal"
                    size="large"
                    header={
                        <div className={styles.header}>
                            <div className={styles['vertical-line']}/>
                            <div className={styles.text}>影评</div>
                        </div>
                    }
                    dataSource={movieComment}
                    renderItem={(item, index) => (
                        <List.Item key={index}
                                   actions={[
                                       <IconText type="star-o" text="0"/>,
                                       <IconText type="like-o" text="0"/>,
                                       <IconText type="message" text="0"/>,
                                   ]}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar size={48} style={{
                                        color: '#FFEB9E',
                                        backgroundColor: '#444343'
                                    }}>{item.username}</Avatar>
                                }
                                title={<div className={styles.title}>{item.username}</div>}
                                description={
                                    <div className={styles.description}>
                                        <div className={styles.comment}> {item.comment}
                                        </div>
                                        <div className={styles.time}> {item.time}
                                        </div>

                                    </div>}>
                            </List.Item.Meta>
                        </List.Item>
                    )}
                />
            </div>
        );
    }

}

export default MovieComment
