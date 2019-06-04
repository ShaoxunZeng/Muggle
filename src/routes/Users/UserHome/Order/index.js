import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";
import {Table} from "antd";

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
    ticketCode: '', //取票码
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
    date: '2019-1-1',
    interval: {
      startTime: '1:00',
      endTime: '1:01'
    },
    status: 1, //0: 未完成 1: 已完成 2: 已失效
    cost: 1,
    ticketCode: '', //取票码
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
      }
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
      }
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

              </div>
            </div>
        )
      }
    }
  ];

  render() {
    return (
        <div className={styles.whole}>
          <Table columns={this.columns} dataSource={orders}/>
        </div>
    )
  }
}

export default WithHeaderFooterSider(Order)

