import React from "react";
import styles from "./index.module.less";
import {Icon, Modal} from "antd";
import {withRouter} from "react-router-dom";
import Button from "../../../../../components/Button";
import CheckBox from "../../../../../components/CheckBox";

const coupons = [
  {
    couponId: 1,
    moviesIncluded: [1, 2, 3],
    couponName: '品质联盟1',
    couponDescription: '春节电影节优惠券',
    couponPictureUrl: 'pic',
    couponDiscount: 30,
    couponThreshold: 0, //使用门槛
    couponStartTime: '2019-06-01',
    couponEndTime: '2019-06-30',
    couponExpiration: '10天', //有效期长度
  },
  {
    couponId: 2,
    moviesIncluded: [],
    couponName: '品质联盟2',
    couponDescription: '春节电影节优惠券',
    couponPictureUrl: 'pic',
    couponDiscount: 1000,
    couponThreshold: 0, //使用门槛
    couponStartTime: '2019-06-01',
    couponEndTime: '2019-06-30',
    couponExpiration: '10天', //有效期长度
  },
  {
    couponId: 2,
    moviesIncluded: [1, 2, 3],
    couponName: '品质联盟2',
    couponDescription: '春节电影节优惠券',
    couponPictureUrl: 'pic',
    couponDiscount: 1000,
    couponThreshold: 0, //使用门槛
    couponStartTime: '2019-06-01',
    couponEndTime: '2019-06-30',
    couponExpiration: '10天', //有效期长度
  },
  {
    couponId: 2,
    moviesIncluded: [1, 2, 3],
    couponName: '品质联盟2',
    couponDescription: '春节电影节优惠券',
    couponPictureUrl: 'pic',
    couponDiscount: 1000,
    couponThreshold: 0, //使用门槛
    couponStartTime: '2019-06-01',
    couponEndTime: '2019-06-30',
    couponExpiration: '10天', //有效期长度
  },
  {
    couponId: 2,
    moviesIncluded: [1, 2, 3],
    couponName: '品质联盟2',
    couponDescription: '春节电影节优惠券',
    couponPictureUrl: 'pic',
    couponDiscount: 1000,
    couponThreshold: 0, //使用门槛
    couponStartTime: '2019-06-01',
    couponEndTime: '2019-06-30',
    couponExpiration: '10天', //有效期长度
  }, {
    couponId: 2,
    moviesIncluded: [1, 2, 3],
    couponName: '品质联盟2',
    couponDescription: '春节电影节优惠券',
    couponPictureUrl: 'pic',
    couponDiscount: 1000,
    couponThreshold: 0, //使用门槛
    couponStartTime: '2019-06-01',
    couponEndTime: '2019-06-30',
    couponExpiration: '10天', //有效期长度
  },
  {
    couponId: 2,
    moviesIncluded: [1, 2, 3],
    couponName: '品质联盟2',
    couponDescription: '春节电影节优惠券',
    couponPictureUrl: 'pic',
    couponDiscount: 1000,
    couponThreshold: 0, //使用门槛
    couponStartTime: '2019-06-01',
    couponEndTime: '2019-06-30',
    couponExpiration: '10天', //有效期长度
  }, {
    couponId: 2,
    moviesIncluded: [1, 2, 3],
    couponName: '品质联盟2',
    couponDescription: '春节电影节优惠券',
    couponPictureUrl: 'pic',
    couponDiscount: 1000,
    couponThreshold: 0, //使用门槛
    couponStartTime: '2019-06-01',
    couponEndTime: '2019-06-30',
    couponExpiration: '10天', //有效期长度
  }
];

class BuyModal extends React.Component {
  state = {
    totalCost: 0,
    coupons: [],
    order: {}
  };

  componentWillMount() {
    const {order} = this.props;
    this.setState({
      coupons: coupons.filter((coupon) => {
        return coupon.couponThreshold <= order.cost
      }),
      order,
      selectedCouponIds: []
    });
  };

  handleOk = () => {
    // TODO
    //  切换到支付页面
    console.log("");
  };

  handleCouponSelection = (value) => {
    this.setState((prevState) => {
      return (prevState.selectedCouponIds
              .filter(item => item.toString() !== value.toString())
              .length
          !== prevState.selectedCouponIds.length)
          ? {selectedCouponIds: prevState.selectedCouponIds.filter(item => item.toString() !== value.toString())}
          : {selectedCouponIds: [value, ...prevState.selectedCouponIds]}
    })
  };

  render() {
    const {modalVisible, onCancel} = this.props;
    const {order, coupons, selectedCouponIds} = this.state;
    return (
        <Modal
            title="购票"
            visible={modalVisible}
            onCancel={onCancel}
            footer={null}
        >
          <div className={styles.whole}>
            <div className={styles.movieInfo}>
              <div className={styles['image-container']}>
                <img className={styles.image} src={order.moviePosterUrl} alt=''/>
              </div>
              <div className={styles['details-container']}>
                <div className={styles.name}>{order.movieName}</div>
                <div className={styles.text}>{order.hallName}</div>
                <div className={styles.text}>{`${order.interval.startTime} - ${order.interval.endTime}`}</div>
                {order.selectedSeats.map((seats) => {
                  return (
                      <div key={seats.row + "_" + seats.column + "_" + order.orderId} className={styles.text}>
                        {`${seats.row}排 ${seats.column}座`}
                      </div>
                  )
                })}
              </div>
            </div>
            <p className={styles.text} style={{marginTop: 30, fontSize: 18}}>可用优惠券</p>
            <div className={styles.coupons}>
              {coupons.map((coupon, index) => {
                return (
                    <div className={styles.coupon} key={"" + coupon.couponId}>
                      <div className={`${styles['coupon-info']} ${styles.text}`}>
                        <p style={{color: "white"}}>{coupon.couponName}</p>
                        <div style={{display: "flex", alignItems: "center"}}>
                          <Icon type="clock-circle"/>
                          <p style={{marginLeft: 10}}>有效期:{coupon.couponExpiration}</p>
                        </div>
                      </div>
                      <CheckBox value={index} onSelected={this.handleCouponSelection}/>
                    </div>
                )
              })}
            </div>
            <div className={styles.cost}>
              <p className={styles.text}
                 style={{
                   fontSize: 23,
                   marginTop: 10
                 }}>¥ {order.cost - selectedCouponIds.reduce((total, index) => total + coupons[index].couponDiscount, 0)}</p>
            </div>
            <div className={styles.buttons}>
              <Button type='gray' onClick={onCancel}>Cancel</Button>
              <Button type='yellow' onClick={this.handleOk}>OK</Button>
            </div>
          </div>
        </Modal>
    );
  }
}

export default withRouter(BuyModal);
