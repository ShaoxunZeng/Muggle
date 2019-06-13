import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";
import {Table, Tag} from 'antd'
import {getAllMessage} from "../../../../services/apiMessage";
import CommentInfoModal from "./CommentInfoModal/index.js";
import {getMovieDetails} from "../../../../services/apiMovies";

const testMsgList = [
    {
        messageType: 1, //<0: 被赠送优惠券>, <1: 想看电影上映>, <3: 邀请点评>, <4: 新优惠活动>,<5: 其他>
        messageTitle: '您有想看电影上映了！', //消息标题
        messageContent: '《复仇者联盟4》今日上映。', //消息内容
        initTime: '2019-06-02',// 发送时间
        messageStatus: 0, // <0: 未读>, <1: 已读> 第一次GET得到的状态是未读，之后GET得到的状态都是已读
        additionalMovieId: null
    },
    {
        messageType: 0, //<0: 被赠送优惠券>, <1: 想看电影上映>, <3: 邀请点评>, <4: 新优惠活动>,<5: 其他>
        messageTitle: '被赠送优惠券', //消息标题
        messageContent: '一张满300减30的优惠券已经送至您的卡包', //消息内容
        initTime: '2019-06-03',// 发送时间
        messageStatus: 0, // <0: 未读>, <1: 已读> 第一次GET得到的状态是未读，之后GET得到的状态都是已读
        additionalMovieId: null
    },
    {
        messageType: 3, //<0: 被赠送优惠券>, <1: 想看电影上映>, <3: 邀请点评>, <4: 新优惠活动>,<5: 其他>
        messageTitle: '电影评价', //消息标题
        messageContent: '看完《复联4》，快来评价吧！', //消息内容
        initTime: '2019-06-03',// 发送时间
        messageStatus: 1, // <0: 未读>, <1: 已读> 第一次GET得到的状态是未读，之后GET得到的状态都是已读
        additionalMovieId: 1
    },
    {
        messageType: 5, //<0: 被赠送优惠券>, <1: 想看电影上映>, <3: 邀请点评>,<4: 新优惠活动>,<5: 其他>
        messageTitle: '您的会员卡可升级！', //消息标题
        messageContent: '充值满500您的会员卡将会自动升级为白金会员卡。', //消息内容
        initTime: '2019-05-04',// 发送时间
        messageStatus: 1, // <0: 未读>, <1: 已读> 第一次GET得到的状态是未读，之后GET得到的状态都是已读
        additionalMovieId: null
    },
    {
        messageType: 4, //<0: 被赠送优惠券>, <1: 想看电影上映>, <3: 邀请点评>, <4: 新优惠活动>,<5: 其他>
        messageTitle: '新优惠活动', //消息标题
        messageContent: '观看《复仇者联盟》赠送优惠券', //消息内容
        initTime: '2019-05-04',// 发送时间
        messageStatus: 0, // <0: 未读>, <1: 已读> 第一次GET得到的状态是未读，之后GET得到的状态都是已读
        additionalMovieId: null
    }
];

class Message extends PureComponent {
    constructor(props) {
        super(props);
        this.state = ({
            msgList: [],
            commentFormVisible: false,
            commentMovieId: 0,//评价电影Id
            movieInfo: {}
        })
    }

    componentWillMount() {
        getAllMessage().then(res => {
            this.setState({
                msgList: res,
                commentFormVisible: false
            })
        });
        // this.setState({
        //     msgList: testMsgList,
        //     commentFormVisible: false
        // })
    };

    toPurchase = (movieId) => {
        this.props.history.push(`/moviedetails/${movieId}`);
    };


    showCommentForm = (movieId) => {
        console.log(movieId);
        this.setState({
            commentFormVisible: true,
            commentMovieId: movieId
        });
        getMovieDetails(movieId).then(res => {
                this.setState({
                    movieInfo: res
                });
            }
        )
    };
    closeCommentInfoModal = () => {
        this.setState({
            commentFormVisible: false
        })
    };

    columns = [
        {title: '消息时间', align: 'left', dataIndex: 'initTime', key: 'initTime'},
        {title: '消息标题', align: 'left', dataIndex: 'messageTitle', key: 'messageTitle'},
        {title: '消息内容', align: 'left', dataIndex: 'messageContent', key: 'messageContent'},
        {
            title: '消息状态',
            align: 'center',
            render: (text, record) => {
                switch (record.messageType) {
                    case 0:
                        return (
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <Tag color={'yellow'}
                                     onClick={() => {
                                         this.props.history.push('/allmovies')
                                     }}>去购票</Tag>
                                <Tag color={record.messageStatus === 0 ? 'gold' : 'grey'}>
                                    {record.messageStatus === 0 ? '未读' : '已读'}
                                </Tag>
                            </div>);
                    case 1:
                        return (
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <Tag color={'orange'}
                                     onClick={() => this.toPurchase(record.additionalMovieId)}>去观看</Tag>
                                <Tag color={record.messageStatus === 0 ? 'gold' : 'grey'}>
                                    {record.messageStatus === 0 ? '未读' : '已读'}
                                </Tag>
                            </div>);
                    case 3:
                        return (
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <Tag color={'yellow'}
                                     onClick={() => this.showCommentForm(record.additionalMovieId)}>去评价</Tag>
                                <Tag color={record.messageStatus === 0 ? 'gold' : 'grey'}>
                                    {record.messageStatus === 0 ? '未读' : '已读'}
                                </Tag>
                            </div>);
                    case 4:
                        return (
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <Tag color={'yellow'}
                                     onClick={() => {
                                         this.props.history.push('/allmovies')
                                     }}>去购票</Tag>
                                <Tag color={record.messageStatus === 0 ? 'gold' : 'grey'}>
                                    {record.messageStatus === 0 ? '未读' : '已读'}
                                </Tag>
                            </div>);
                    default:
                        return (<Tag color={record.messageStatus === 0 ? 'gold' : 'grey'}>
                            {record.messageStatus === 0 ? '未读' : '已读'}
                        </Tag>)
                }
            }
        }];
    // record.messageType === 3 ?
    //     <Tag color={'yellow'} onClick={() => this.showCommentForm(record.additionalMovieId)}>去评价</Tag> :
    //     record.messageType === 4 ?
    //         <Tag color={'yellow'} onClick={() => {
    //             this.props.history.push('/allmovies')
    //         }}>去购票</Tag> :
    //         <Tag color={record.messageStatus === 0 ? 'gold' : 'grey'}>
    //             {record.messageStatus === 0 ? '未读' : '已读'}
    //         </Tag>


    render() {
        const {msgList, commentFormVisible, commentMovieId, movieInfo} = this.state;
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <Table columns={this.columns} dataSource={msgList}/>
                    <CommentInfoModal
                        movieInfo={movieInfo}
                        commentFormVisible={commentFormVisible}
                        closeCommentInfoModal={this.closeCommentInfoModal}
                        movieId={commentMovieId}/>
                </div>
            </div>
        )
    }
}

export default WithHeaderFooterSider(Message)

