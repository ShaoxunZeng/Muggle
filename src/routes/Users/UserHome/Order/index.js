import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";
import {Table} from "antd";
import Button from "../../../../components/Button";
import Tag from "./Tag";
import {getAllTicketOrders} from "../../../../services/apiOrders";
import AlreadyBuyModal from "./AlreadyBuyModal";
import BuyModal from "./BuyModal";

const orders = [
  {
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
  }, {
    orderId: 2,
    movieName: "spider man",
    moviePosterUrl: "https://s2.ax1x.com/2019/05/31/VQrg6s.png",
    hallName: '2号厅',
    date: '2019-1-2',
    interval: {
      startTime: '1:00',
      endTime: '1:01'
    },
    status: 0, //0: 未完成 1: 已完成 2: 已失效
    cost: 1,
    ticketCode: '222', //取票码
    selectedSeats: [{
      row: 1,
      column: 1
    }, {
      row: 1,
      column: 2
    }],
    ticketNum: 1,
    initTime: '' //生成订单时间
  }, {
    orderId: 3,
    movieName: "spider man",
    moviePosterUrl: "https://s2.ax1x.com/2019/05/31/VQrg6s.png",
    hallName: '2号厅',
    date: '2019-1-4',
    interval: {
      startTime: '1:00',
      endTime: '1:01'
    },
    status: 2, //0: 未完成 1: 已完成 2: 已失效
    cost: 1,
    ticketCode: '333', //取票码
    selectedSeats: [{
      row: 1,
      column: 1
    }, {
      row: 1,
      column: 2
    }],
    ticketNum: 1,
    initTime: '' //生成订单时间
  }, {
    orderId: 4,
    movieName: "spider man",
    moviePosterUrl: "https://s2.ax1x.com/2019/05/31/VQrg6s.png",
    hallName: '2号厅',
    date: '2019-1-3',
    interval: {
      startTime: '1:00',
      endTime: '1:01'
    },
    status: 0, //0: 未完成 1: 已完成 2: 已失效
    cost: 1,
    ticketCode: '444', //取票码
    selectedSeats: [{
      row: 1,
      column: 1
    }, {
      row: 1,
      column: 2
    }],
    ticketNum: 1,
    initTime: '' //生成订单时间
  }, {
    orderId: 5,
    movieName: "spider man",
    moviePosterUrl: "https://s2.ax1x.com/2019/05/31/VQrg6s.png",
    hallName: '2号厅',
    date: '2019-1-9',
    interval: {
      startTime: '1:00',
      endTime: '1:01'
    },
    status: 1, //0: 未完成 1: 已完成 2: 已失效
    cost: 1,
    ticketCode: '555', //取票码
    selectedSeats: [{
      row: 1,
      column: 1
    }, {
      row: 1,
      column: 2
    }],
    ticketNum: 1,
    initTime: '' //生成订单时间
  }, {
    orderId: 6,
    movieName: "spider man",
    moviePosterUrl: "https://s2.ax1x.com/2019/05/31/VQrg6s.png",
    hallName: '2号厅',
    date: '2019-1-6',
    interval: {
      startTime: '1:00',
      endTime: '1:01'
    },
    status: 0, //0: 未完成 1: 已完成 2: 已失效
    cost: 1,
    ticketCode: '666', //取票码
    selectedSeats: [{
      row: 1,
      column: 1
    }, {
      row: 1,
      column: 2
    }],
    ticketNum: 1,
    initTime: '' //生成订单时间
  }
];

const coupons = [
  {
    couponId: 1,
    moviesIncluded: [1, 2, 3],
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
    moviesIncluded: [],
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
    moviesIncluded: [1, 2, 3],
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
    moviesIncluded: [1, 2, 3],
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
    moviesIncluded: [1, 2, 3],
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
    moviesIncluded: [1, 2, 3],
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
    moviesIncluded: [1, 2, 3],
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
    moviesIncluded: [1, 2, 3],
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

class Order extends PureComponent {
  columns = [
    {
      title: '电影',
      align: 'center',
      render: (text, record) => {
        return (
            <div className={styles.movieInfo}>
              <div className={styles.container}>
                <img src={record.moviePosterUrl}/>
              </div>
              <p>{record.movieName}</p>
            </div>
        )
      }
    },
    {
      title: '座位',
      align: 'center',
      render: (text, record) => {
        return (
            <div className={styles.seats}>
              <div className={styles.text}>
                <p style={{fontWeight: "bold", fontSize: 16}}>{record.hallName}</p>
                {record.selectedSeats.map((item) => {
                  return <div>{`${item.row} 排 ${item.column} 座`}</div>
                })}
              </div>
            </div>
        )
      },
    },
    {
      title: '日期',
      align: 'center',
      render: (text, record) => {
        return (
            <div className={styles.date}>
              <div className={styles.text}>
                {record.date}
              </div>
            </div>
        )
      },
      defaultSortOrder: 'ascend',
      sorter: (a, b) => new Date(b.date) - new Date(a.date)
    }, {
      title: '时间',
      align: 'center',
      render: (text, record) => {
        return (
            <div className={styles.time}>
              <div className={styles.text}>
                {`${record.interval.startTime} - ${record.interval.endTime}`}
              </div>
            </div>
        )
      }
    }, {
      title: '票价',
      align: 'center',
      render: (text, record) => {
        return (
            <div className={styles.cost}>
              <div className={styles.text}>
                {"¥" + record.cost}
              </div>
            </div>
        )
      }
    }, {
      title: '状态',
      align: 'center',
      render: (text, record) => {
        return (
            <div className={styles.cost}>
              <div className={styles.text}>
                {record.status === 0 &&
                <Button type="yellow" onClick={() => this.handleBuyClick(record.orderId, record.cost)}>立即支付</Button>}
                {record.status === 1 &&
                <Tag type="lime" onClick={() => this.handleLookClick(record.ticketCode)}>
                  查看取票码
                </Tag>
                }
                {record.status === 2 &&
                <Tag type="grey">
                  已失效
                </Tag>}
              </div>
            </div>
        )
      },
      sorter: (a, b) => a.status - b.status
    }
  ];

  state = {
    orders: [],
    coupons: [],
    selectedTicketCode: '',
    selectedTicketOrder: '',
    alreadyBuyModalVisible: false,
    buyModalVisible: false
  };

  componentWillMount() {
    //TODO() 调用接口13 查看所有购票订单
    // getAllTicketOrders()
    this.setState({
      orders: orders
    })
  }

  handleBuyClick = (orderId, cost) => {
    //TODO() 调用接口18. 查看优惠券
    // getAllTicketOrders()
    this.setState({
      coupons: coupons,
      buyModalVisible: true,
      selectedTicketCode: orderId,
      cost: cost  // 为了方便判断可用优惠券
    })
  };

  handleLookClick = (ticketCode) => {
    this.setState({
      alreadyBuyModalVisible: true,
      selectedTicketCode: ticketCode
    })
  };

  render() {
    return (
        <div className={styles.whole}>
          <Table columns={this.columns} dataSource={this.state.orders}/>
          <AlreadyBuyModal
              modalVisible={this.state.alreadyBuyModalVisible}
              selectedTicketCode={this.state.selectedTicketCode}
              onOk={() => {
                this.setState({
                  alreadyBuyModalVisible: false,
                });
              }}
              onCancel={() => {
                this.setState({
                  alreadyBuyModalVisible: false,
                });
              }}
          />
          <BuyModal
              modalVisible={this.state.buyModalVisible}
              selectedTicketOrder={this.state.selectedTicketOrder}
              // 只传入可以用的优惠券
              coupons={this.state.coupons.filter((coupon) => {
                return coupon.couponThreshold <= this.state.cost
              })}
              onCancel={() => {
                this.setState({
                  buyModalVisible: false,
                });
              }}
          />
        </div>
    )
  }
}

export default WithHeaderFooterSider(Order)

