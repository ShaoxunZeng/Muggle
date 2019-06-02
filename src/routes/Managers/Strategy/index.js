import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {Tabs} from "antd";
import MemberCardStrategy from "./components/MemberCardStrategy";
import RefundStrategy from "./components/RefundStrategy";

const {TabPane} = Tabs;


class Strategy extends PureComponent {
    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <Tabs type='card'>
                        <TabPane tab='会员卡策略' key='1'>
                            <MemberCardStrategy/>
                        </TabPane>
                        <TabPane tab='退票策略' key='2'>
                            <RefundStrategy/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    };
}

export default WithSider(Strategy);
