import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import styles from './index.module.less';
import UserAvatar from '../Avatar';

class Sider extends Component {

  render() {
    return (
        <div className={styles.whole}>
          <div className={styles.up}>
          </div>
          <div className={styles['yellow-lines']}/>
          <div className={styles['yellow-lines']}/>
          <div className={styles.items}>
            <nav className={styles.nav}>
              <NavLink
                  className={styles["nav-item"]}
                  to={"/manage/arrange"}
                  activeClassName={styles["nav-active"]}
              >
                <div className={styles['vertical-line']}/>
                <div className={styles.text}>
                  排片管理
                </div>
              </NavLink>
              <div className={styles.underline}/>
              <NavLink
                  className={styles["nav-item"]}
                  to={"/manage/onshelf"}
                  activeClassName={styles["nav-active"]}
              >
                <div className={styles['vertical-line']}/>
                <div className={styles.text}>
                  上架管理
                </div>
              </NavLink>
              <div className={styles.underline}/>
              <NavLink
                  className={styles["nav-item"]}
                  to={"/manage/statistics"}
                  activeClassName={styles["nav-active"]}
              >
                <div className={styles['vertical-line']}/>
                <div className={styles.text}>
                  数据统计
                </div>
              </NavLink>
              <div className={styles.underline}/>
              {/*<NavLink*/}
                  {/*className={styles["nav-item"]}*/}
                  {/*to={"/manage/movies"}*/}
                  {/*activeClassName={styles["nav-active"]}*/}
              {/*>*/}
                {/*<div className={styles['vertical-line']}/>*/}
                {/*<div className={styles.text}>*/}
                  {/*影片信息*/}
                {/*</div>*/}
              {/*</NavLink>*/}
              {/*<div className={styles.underline}/>*/}
              <NavLink
                  className={styles["nav-item"]}
                  to={"/manage/halls"}
                  activeClassName={styles["nav-active"]}
              >
                <div className={styles['vertical-line']}/>
                <div className={styles.text}>
                  影厅信息
                </div>
              </NavLink>
              <div className={styles.underline}/>
              <NavLink
                  className={styles["nav-item"]}
                  to={"/manage/activity"}
                  activeClassName={styles["nav-active"]}
              >
                <div className={styles['vertical-line']}/>
                <div className={styles.text}>
                  优惠活动
                </div>
              </NavLink>
              <div className={styles.underline}/>
              {/*<NavLink*/}
                  {/*className={styles["nav-item"]}*/}
                  {/*to={"/manage/member"}*/}
                  {/*activeClassName={styles["nav-active"]}*/}
              {/*>*/}
                {/*<div className={styles['vertical-line']}/>*/}
                {/*<div className={styles.text}>*/}
                  {/*会员管理*/}
                {/*</div>*/}
              {/*</NavLink>*/}
              {/*<div className={styles.underline}/>*/}
              <NavLink
                  className={styles["nav-item"]}
                  to={"/manage/strategy"}
                  activeClassName={styles["nav-active"]}
              >
                <div className={styles['vertical-line']}/>
                <div className={styles.text}>
                  策略管理
                </div>
              </NavLink>
              <div className={styles.underline}/>
              <NavLink
                  className={styles["nav-item"]}
                  exact
                  to={"/manage/personnel"}
                  activeClassName={styles["nav-active"]}
              >
                <div className={styles['vertical-line']}/>
                <div className={styles.text}>
                  人事管理
                </div>
              </NavLink>
              <div className={styles.underline}/>
              {/*<NavLink*/}
                  {/*className={styles["nav-item"]}*/}
                  {/*exact  // 加一个exact关键字防止主页下面的白条一直都是active*/}
                  {/*to={"/manage/account"}*/}
                  {/*activeClassName={styles["nav-active"]}*/}
              {/*>*/}
                {/*<div className={styles['vertical-line']}/>*/}
                {/*<div className={styles.text}>*/}
                  {/*个人信息*/}
                {/*</div>*/}
              {/*</NavLink>*/}
              {/*<div className={styles.underline}/>*/}
            </nav>
          </div>
        </div>
    )
  }
}

export default withRouter(Sider);
