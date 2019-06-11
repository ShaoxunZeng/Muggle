import React, {Component} from 'react'
import styles from './index.module.less';
import {List, Skeleton,Avatar,Icon} from 'antd'

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);

class MovieComment extends Component {

    render() {
        const {movieComment} = this.props;

        return (
            <div>
                <List
                    className="commentList"
                    itemLayout="vertical"
                    size="large"
                    header={'影评'}
                    dataSource={movieComment}
                    actions={[
                        <IconText type="star-o" text="156" />,
                        <IconText type="like-o" text="156" />,
                        <IconText type="message" text="2" />,
                    ]}
                    renderItem={item => (
                        <List.Item >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                    }
                                    title={<a href="https://ant.design">{item.username}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                                <div>content</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        );
    }

}

export default MovieComment
