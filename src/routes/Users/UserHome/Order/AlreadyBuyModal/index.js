import React from "react";
import styles from "./index.module.less";
import {Modal} from "antd";
import Button from "../../../../../components/Button";

class AlreadyBuyModal extends React.Component {
  render() {
    const {modalVisible, selectedTicketCode, onOk, onCancel} = this.props;
    return (
        <Modal
            title="查看取票码"
            visible={modalVisible}
            onCancel={onCancel}
            footer={null}
        >
          <div className={styles['modal']}>
            <div className={styles['modal-text']}>您的取票码是</div>
            <div className={styles['modal-text']}>{selectedTicketCode}</div>
          </div>
          <div className={styles.buttons}>
            <Button type='gray' onClick={onCancel}>Cancel</Button>
            <Button type='yellow' onClick={onOk}>OK</Button>
          </div>
        </Modal>
    );
  }
}

export default AlreadyBuyModal;
