import React from "react";
import styles from "../index.module.less";
import {Modal} from "antd";
import {withRouter} from "react-router-dom";

class BuyModal extends React.Component {
  componentWillMount() {
  }

  handleOk = () => {

  };

  render() {
    const {modalVisible, selectedTicketOrder, onCancel, coupons} = this.props;
    return (
        <Modal
            title="查看取票码"
            visible={modalVisible}
            onOk={this.handleOk}
            onCancel={onCancel}
        >
          <div className={styles['modal']}>
            <div className={styles['modal-text']}>您的取票码是</div>
            <div className={styles['modal-text']}>{selectedTicketOrder}</div>
          </div>
        </Modal>
    );
  }
}

export default withRouter(BuyModal);
