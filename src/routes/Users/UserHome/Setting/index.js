import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";
import Button from "../../../../components/Button";
import {clearAuthorization} from "../../../../utils/authorization";

class Setting extends PureComponent {
  handleLogOutClick = () => {
    clearAuthorization();
    this.props.history.push("/");
  };

  render() {
    return (
        <div className={styles.whole}>
          <Button type="grey" onClick={this.handleLogOutClick}>退出登录</Button>
        </div>
    )
  }
}

export default WithHeaderFooterSider(Setting)
