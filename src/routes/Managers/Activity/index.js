import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import SendCoupon from "./components/SendCoupon";
import ManageActivity from "./components/ManageActivity";
import {Tabs} from "antd";
import {delActivity, getAllActivities} from "../../../services/apiActivity";


const {TabPane} = Tabs;

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

const testBriefUserInfo = [
    {
        userId: 1,
        userTotalConsumption: 100, //用户累计消费
        isMember: true, //是否是会员
        memberCredit: 20 //会员卡余额
    },
    {
        userId: 2,
        userTotalConsumption: 200, //用户累计消费
        isMember: false, //是否是会员
        memberCredit: -1 //会员卡余额
    }
];

const testMovieOnShelfInfo = [
    {
        isOnShow: true,// 已上映、未上映
        movieId: 1, // 电影Id
        movieName: '已上映电影1',// 电影名称
        movieType: '电影类别',// 电影类别（动作片）
        movieYear: 2019,// 电影年份
        movieLength: 120,// 电影时长
    },
    {
        isOnShow: false,// 已上映、未上映
        movieId: 2, // 电影Id
        movieName: '未映电影2',// 电影名称
        movieType: '电影类别',// 电影类别（动作片）
        movieYear: 2019,// 电影年份
        movieLength: 150,// 电影时长
    },
    {
        isOnShow: true,// 已上映、未上映
        movieId: 3,// 电影Id
        movieName: '已上映电影3',// 电影名称
        movieType: '电影类别',// 电影类别（动作片）
        movieYear: 2019,// 电影年份
        movieLength: 120,// 电影时长
    },
];

class Activity extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
            briefUserInfo: [],
            movieOnShelfInfo: []
        }
    }

    componentWillMount() {
        //TODO() 调用接口19 获取当前所有活动信息
        // getAllActivities().then((res) => this.setState({
        //   activities: res
        // }));
        //TODO() 调用接口22 获取简要用户信息
        //TODO() 调用接口4 获取当前已上架所有影片
        this.setState({
            activities: testActivityInfo,
            briefUserInfo: testBriefUserInfo,
            movieOnShelfInfo: testMovieOnShelfInfo.map(movie =>
                movie.movieId + ' ' + movie.movieName
            )
        })
    }


    deleteActivity = eventId => {
        console.log(eventId);
        this.setState(
            {
                activities: this.state.activities.filter(activity => activity.eventId !== eventId)
            }
        );
        //TODO() 调用接口21  删除优惠活动
        // Bug：第一次点击删除无法删除
        // delActivity(eventId);
    };


    render() {
        const {activities, briefUserInfo, movieOnShelfInfo} = this.state;
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <Tabs type="card">
                        <TabPane tab="优惠活动" key="1">
                            <ManageActivity activities={activities}
                                            movieOnShelfInfo={movieOnShelfInfo}
                                            deleteActivity={this.deleteActivity}
                            />
                        </TabPane>
                        <TabPane tab="发布优惠券" key="2">
                            <SendCoupon briefUserInfo={briefUserInfo}/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    };
}

export default WithSider(Activity);
