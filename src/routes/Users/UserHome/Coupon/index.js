import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";
import {getAllCoupons} from "../../../../services/apiCoupon";
import CouponCard from "../../../../components/CouponCard";

const testCouponInfo = [
    {
        couponId: 1,
        couponName: '品质联盟1',
        couponDescription: '春节电影节优惠券',
        couponPictureUrl: 'pic',
        couponDiscount: 30,
        couponThreshold: 100, //使用门槛
        couponStartTime: '2019-06-01',
        couponEndTime: '2019-06-30',
        couponExpiration: '10天', //有效期长度
    },
    {
        couponId: 2,
        couponName: '品质联盟2',
        couponDescription: '春节电影节优惠券',
        couponPictureUrl: 'pic',
        couponDiscount: 1000,
        couponThreshold: 2000, //使用门槛
        couponStartTime: '2019-06-01',
        couponEndTime: '2019-06-30',
        couponExpiration: '10天', //有效期长度
    },
    {
        couponId: 2,
        couponName: '品质联盟2',
        couponDescription: '春节电影节优惠券',
        couponPictureUrl: 'pic',
        couponDiscount: 1000,
        couponThreshold: 2000, //使用门槛
        couponStartTime: '2019-06-01',
        couponEndTime: '2019-06-30',
        couponExpiration: '10天', //有效期长度
    },
    {
        couponId: 2,
        couponName: '品质联盟2',
        couponDescription: '春节电影节优惠券',
        couponPictureUrl: 'pic',
        couponDiscount: 1000,
        couponThreshold: 2000, //使用门槛
        couponStartTime: '2019-06-01',
        couponEndTime: '2019-06-30',
        couponExpiration: '10天', //有效期长度
    },
    {
        couponId: 2,
        couponName: '品质联盟2',
        couponDescription: '春节电影节优惠券',
        couponPictureUrl: 'pic',
        couponDiscount: 1000,
        couponThreshold: 2000, //使用门槛
        couponStartTime: '2019-06-01',
        couponEndTime: '2019-06-30',
        couponExpiration: '10天', //有效期长度
    }, {
        couponId: 2,
        couponName: '品质联盟2',
        couponDescription: '春节电影节优惠券',
        couponPictureUrl: 'pic',
        couponDiscount: 1000,
        couponThreshold: 2000, //使用门槛
        couponStartTime: '2019-06-01',
        couponEndTime: '2019-06-30',
        couponExpiration: '10天', //有效期长度
    },
    {
        couponId: 2,
        couponName: '品质联盟2',
        couponDescription: '春节电影节优惠券',
        couponPictureUrl: 'pic',
        couponDiscount: 1000,
        couponThreshold: 2000, //使用门槛
        couponStartTime: '2019-06-01',
        couponEndTime: '2019-06-30',
        couponExpiration: '10天', //有效期长度
    }, {
        couponId: 2,
        couponName: '品质联盟2',
        couponDescription: '春节电影节优惠券',
        couponPictureUrl: 'pic',
        couponDiscount: 1000,
        couponThreshold: 2000, //使用门槛
        couponStartTime: '2019-06-01',
        couponEndTime: '2019-06-30',
        couponExpiration: '10天', //有效期长度
    }


];


class Coupon extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            couponList: []
        }

    }

    componentWillMount() {
        getAllCoupons().then(res => {
            this.setState(
                {
                    couponList: res
                }
            );
            if(res.length===0){
                alert('暂无可用优惠券')
            }
        });
        // this.setState(
        //     {
        //         couponList: testCouponInfo
        //     }
        // )
    }

    render() {
        const {couponList} = this.state;


        return (
            <div className={styles.whole}>
                {
                    couponList.map(coupon =>
                        <div className={styles.couponCard}>
                            <CouponCard
                                couponName={coupon.couponName}
                                couponDescription={coupon.couponDescription}
                                couponDiscount={coupon.couponDiscount}
                                couponThreshold={coupon.couponThreshold}
                                couponStartTime={coupon.couponStartTime}
                                couponEndTime={coupon.couponEndTime}
                                couponExpiration={coupon.couponExpiration}/>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default WithHeaderFooterSider(Coupon)


