import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";
import Button from "../../../../components/Button";
import {clearAuthorization} from "../../../../utils/authorization";
import {Popconfirm} from "antd";

class Setting extends PureComponent {
    handleLogOutClick = () => {
        alert('登出成功！');
        clearAuthorization();
        setTimeout(this.props.history.push("/"), 3000)
    };

    render() {
        return (
            <div className={styles.whole}>
                <img
                    src={'https://cdn.nlark.com/yuque/0/2019/png/248245/1559139789103-98db7385-6320-4f72-a2b2-daae85080a83.png'}/>
                <div style={{marginTop: 40}}>
                    <Popconfirm title="确认退出？"
                                onConfirm={() => this.handleLogOutClick()}
                                okText="Yes"
                                cancelText="No">
                        <Button type="yellow">退出登录</Button>
                    </Popconfirm>
                </div>
            </div>
        )
    }
}

export default WithHeaderFooterSider(Setting)
