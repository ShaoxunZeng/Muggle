import React from "react";
import styles from "./index.module.less";
import {Modal} from "antd";
import {withRouter} from "react-router-dom";
import Button from "../../../../../components/Button";
import CheckBox from "../../../../../components/CheckBox";

class BuyModal extends React.Component {
  componentWillMount() {
  }

  handleOk = () => {

  };

  handleCouponSelection = (value) => {
    console.log(value)
  };

  order = {
    orderId: 1,
    movieName: "spider man",
    moviePosterUrl: "https://s2.ax1x.com/2019/05/31/VQrg6s.png",
    hallName: '1号厅',
    date: '2019-1-1',
    interval: {
      startTime: '1:00',
      endTime: '1:01'
    },
    status: 1, //0: 未完成 1: 已完成 2: 已失效
    cost: 1,
    ticketCode: '111', //取票码
    selectedSeats: [{
      row: 1,
      column: 1
    }],
    ticketNum: 1,
    initTime: '' //生成订单时间
  };

  coupon = {
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
  };

  render() {
    const {modalVisible, coupons, onCancel, order} = this.props;
    return modalVisible ? (
        <Modal
            title="购票"
            visible={modalVisible}
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
            <p>可用优惠券</p>
            <CheckBox value={1} onSelected={this.handleCouponSelection}/>
            <CheckBox value={2} onSelected={this.handleCouponSelection}/>
            <div className={styles.coupons}>
              {coupons.map(() => {

              })}
            </div>
            <div className={styles.buttons}>
              <Button type='gray' onClick={onCancel}>Cancel</Button>
              <Button type='yellow' onClick={onCancel}>OK</Button>
            </div>
          </div>
        </Modal>
    ) : "";
  }
}

export default withRouter(BuyModal);
