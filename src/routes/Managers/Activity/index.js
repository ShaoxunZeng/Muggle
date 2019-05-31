import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import SendCoupon from "./components/SendCoupon";
import ManageActivity from "./components/ManageActivity";
import {Divider, Tabs} from "antd";


const {TabPane} = Tabs;

const testActivityInfo = {
    eventId: 1,
    eventName: '春季外卖节',
    eventDescription: '春季外卖界活动描述',
    moviesIncluded: [1, 2, 3],
    startTime: '2019-04-21',
    endTime: '2019-05-21',
    couponName: '品质联盟',
    couponDescription: '春节电影节优惠券111111111111111',
    couponPictureUrl: '优惠券图片',
    couponDiscount: 0.9, // 优惠券折扣
    couponThreshold: 100, // 优惠券门槛
    couponExpiration: '三个月'

};

class Activity extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    componentWillMount() {
        //TODO 调用接口19 获取当前所有活动信息
        this.setState({
            activities: Array(10).fill(testActivityInfo),
        })
    }

    render() {
        const {activities} = this.state;
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <Tabs type="card">
                        <TabPane tab="优惠活动" key="1">
                            <ManageActivity activities={activities}/>
                        </TabPane>
                        <TabPane tab="发布优惠券" key="2">
                            <SendCoupon/>
                        </TabPane>
                    </Tabs>,
                </div>
            </div>
        )
    };
}

export default WithSider(Activity);
