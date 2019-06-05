import React from "react";
import styles from "../index.module.less";
import {Modal} from "antd";

class AlreadyBuyModal extends React.Component {
  render() {
    const {modalVisible, selectedTicketCode, onOk, onCancel} = this.props;
    return (
        <Modal
            title="查看取票码"
            visible={modalVisible}
            onOk={onOk}
            onCancel={onCancel}
        >
          <div className={styles['modal']}>
            <div className={styles['modal-text']}>您的取票码是</div>
            <div className={styles['modal-text']}>{selectedTicketCode}</div>
          </div>
        </Modal>
    );
  }
}

export default AlreadyBuyModal;
