import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../../components/WithHeaderFooter";
import {Table} from "antd";
import {Descriptions} from "antd";
import {getAllActivities, getBriefUserInfo} from "../../../services/apiActivity";


const testActivityInfo = [
    {
        eventId: 1,
        eventName: '春季外卖节1',
        eventDescription: '春季外卖界活动描述',
        moviesIncluded: [1, 2, 3],
        startTime: '2019-04-21',
        endTime: '2019-05-21',
        couponName: '品质联盟',
        couponDescription: '春节电影节优惠券',
        couponPictureUrl: '优惠券图片',
        couponDiscount: 10, // 优惠券折扣
        couponThreshold: 100, // 优惠券门槛
        couponExpiration: '三个月'

    },
    {
        eventId: 2,
        eventName: '春季外卖节2',
        eventDescription: '春季外卖界活动描述',
        moviesIncluded: [1],
        startTime: '2019-04-21',
        endTime: '2019-05-21',
        couponName: '品质联盟',
        couponDescription: '春节电影节优惠券111111111111111',
        couponPictureUrl: '优惠券图片',
        couponDiscount: 20, // 优惠券折扣
        couponThreshold: 100, // 优惠券门槛
        couponExpiration: '三个月'

    },
    {
        eventId: 3,
        eventName: '春季外卖节3',
        eventDescription: '春季外卖界活动描述',
        moviesIncluded: [1, 2, 3],
        startTime: '2019-04-21',
        endTime: '2019-05-21',
        couponName: '品质联盟',
        couponDescription: '春节电影节优惠券111111111111111',
        couponPictureUrl: '优惠券图片',
        couponDiscount: 10, // 优惠券折扣
        couponThreshold: 100, // 优惠券门槛
        couponExpiration: '三个月'

    },];


function CustomExpandIcon(props) {
    let text;
    if (props.expanded) {
        text = '&#9650';
    } else {
        text = '&#9660';
    }
    return (
        <a
            onClick={e => props.onExpand(props.record, e)}
            dangerouslySetInnerHTML={{__html: text}}
            style={{color: '#FFEB9E', cursor: 'pointer'}}
        />
    );
}

class Discount extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    columns = [
        {title: '活动编号', align: 'center', dataIndex: 'eventId', key: 'eventId'},
        {title: '活动名称', align: 'center', dataIndex: 'eventName', key: 'eventName'},
        {title: '活动描述', align: 'center', dataIndex: 'eventDescription', key: 'eventDescription'},
        {title: '开始时间', align: 'center', dataIndex: 'startTime', key: 'startTime'},
        {title: '结束时间', align: 'center', dataIndex: 'endTime', key: 'endTime'}
    ];

    componentWillMount() {
        getAllActivities().then(res=>
            this.setState({
                activities:res
            })
        )

    }

    onExpand = (expanded, record) => {
        console.log('onExpand', expanded, record);
    };

    CustomExpandContent = (record) => {
        return (
            <div>
                <Descriptions
                    title={"优惠券名称： " + record.couponName}
                    border>
                    <Descriptions.Item label="优惠券描述">{record.couponDescription}</Descriptions.Item>
                    <Descriptions.Item label="参与电影" span={2}>{record.moviesIncluded.join(',')}</Descriptions.Item>
                    <Descriptions.Item label="有效时长">{record.couponExpiration}天</Descriptions.Item>
                    <Descriptions.Item label="使用门槛">{record.couponThreshold + '元'}</Descriptions.Item>
                    <Descriptions.Item label="优惠">{'满'+record.couponThreshold +'减'+record.couponDiscount+'元'}</Descriptions.Item>
                </Descriptions>
            </div>

        )
    };


    render() {
        const {activities} = this.state;
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <div className={styles.form}>
                        <Table columns={this.columns} dataSource={activities}
                               expandIcon={CustomExpandIcon}
                               expandedRowRender={this.CustomExpandContent}
                               onExpand={this.onExpand}
                               expandIconAsCell
                               rowKey={record => record.id}
                        /></div>
                </div>
            </div>
        )
    };
}

export default WithHeaderFooter(Discount);
