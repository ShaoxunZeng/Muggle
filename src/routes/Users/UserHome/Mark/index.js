import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";
import {getAllMarks} from "../../../../services/apiMark";
import MarkCard from "../../../../components/MarkCard";
import {Row, Col} from 'antd'
//测试数据
const mark1 = {
  posterUrl: 'https://s2.ax1x.com/2019/05/31/VQrg6s.png',
  movieId: 1, // 电影Id
  movieName: '雷神 Thor:Ragnarok',// 电影名称
  movieType: 'Action, Adventure, Drama',// 电影类别（动作片）
  movieYear: 2019,// 电影年份
  movieLength: 123,// 电影时长
  movieDescription: '电影简介',// 电影简介
  userStatus: 2, //<1: 已看过>, <2: 未看>
  movieStatus: 1 //<1: 未上映>, <2: 已上映>, <3: 已下架>
};
const mark2 = {
  posterUrl: 'https://s2.ax1x.com/2019/05/31/VQrg6s.png',
  movieId: 2, // 电影Id
  movieName: '雷 神 Thor:Ragnarok',// 电影名称
  movieType: 'Action, Adventure, Drama',// 电影类别（动作片）
  movieYear: 2019,// 电影年份
  movieLength: 100,// 电影时长
  movieDescription: '雷神简介',// 电影简介
  userStatus: 1, //<1: 已看过>, <2: 未看>
  movieStatus: 2 //<1: 未上映>, <2: 已上映>, <3: 已下架>
};
const mark3 = {
  posterUrl: 'https://s2.ax1x.com/2019/05/31/VQrg6s.png',
  movieId: 3, // 电影Id
  movieName: 'spider man',// 电影名称
  movieType: 'Action, Adventure, Drama',// 电影类别（动作片）
  movieYear: 2019,// 电影年份
  movieLength: 150,// 电影时长
  movieDescription: '蜘蛛侠简介',// 电影简介
  userStatus: 2, //<1: 已看过>, <2: 未看>
  movieStatus: 3 //<1: 未上映>, <2: 已上映>, <3: 已下架>
};
const testMarkList = [];
Array(10).fill(0).map(() => testMarkList.push(mark1, mark2, mark3));

class Mark extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      markList: []
    }
  }

  componentWillMount() {
    getAllMarks().then(res => {
          console.log(res);
          this.setState({
            markList: res
          });
          if (res.length === 0) {
            alert('你还没有想看电影，快去影院首页看看吧');
            this.props.history.push('/allmovies')
          }
        }
    )
    // this.setState({
    //     markList: testMarkList
    // })
  }

  render() {
    const {markList} = this.state;
    return (
        <div className={styles.whole}>
          <Row className={styles.row} gutter={16}>
            {
              markList.map(mark =>
                  <Col span={6}>
                    <MarkCard posterUrl={mark.posterUrl} movieName={mark.movieName}
                              movieType={mark.movieType} movieYear={mark.movieYear}
                              movieLength={mark.movieLength} movieDescription={mark.movieDescription}
                              userStatus={mark.userStatus} movieStatus={mark.movieStatus}
                    />
                  </Col>
              )
            }
          </Row>
        </div>
    )
  }
}

export default WithHeaderFooterSider(Mark)

