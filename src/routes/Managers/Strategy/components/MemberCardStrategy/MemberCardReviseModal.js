import React, {Component} from 'react'
import {Form, Modal, Input} from 'antd'
import Button from "../../../../../components/Button";
import styles from "../RefundStrategy/index.module.less";
import {changeMemberCard} from "../../../../../services/apiStrategy";

class MemberCardReviseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberStrategyId: 0,
            memberStrategyName: '',
            memberPictureUrl: '',
            purchaseThreshold: 0, // 购买(初始充值)起始金额
            memberDiscountRate: 0 // 折扣率
        }
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            memberStrategyId: nextProps.memberStrategyId,
            memberStrategyName: nextProps.memberStrategyName,
            memberPictureUrl: nextProps.memberPictureUrl,
            purchaseThreshold: nextProps.purchaseThreshold, // 购买(初始充值)起始金额
            memberDiscountRate: nextProps.memberDiscountRate// 折扣率
        })
    }


    handleNameChange = e => {
        this.setState({
            memberStrategyName: e.target.value
        })
    };
    handleThresholdChange = e => {
        this.setState({
            purchaseThreshold: e.target.value
        })
    };
    handleRateChange = e => {
        this.setState({
            memberDiscountRate: e.target.value
        })
    };
    handleCancel = () => {
        this.state = {
            memberStrategyName: '',
            memberPictureUrl: '',
            purchaseThreshold: 0, // 购买(初始充值)起始金额
            memberDiscountRate: 0 // 折扣率
        };
        this.props.closeMemberCardReviseModal();
    };
    handleSubmit = () => {
        let memberCardInfo = {
            memberStrategyId: this.props.memberStrategyId,
            memberStrategyName: this.state.memberStrategyName,
            memberPictureUrl: '',
            purchaseThreshold: Number(this.state.purchaseThreshold), // 购买(初始充值)起始金额
            memberDiscountRate: Number(this.state.memberDiscountRate) // 折扣率
        };
        changeMemberCard(memberCardInfo).then(res=>{
            alert('修改会员卡信息成功！');
            this.props.closeMemberCardReviseModal();
            window.location.href = "/manage/strategy";

        }).catch(res=>{
            alert('该会员卡已有用户使用，不可更改！')
        })
    };

    render() {
        const {memberCardReviseFormVisible} = this.props;
        const {memberStrategyId, memberStrategyName, purchaseThreshold, memberDiscountRate} = this.state;
        return (
            <div>
                <Modal title={'修改会员卡信息'}
                       visible={memberCardReviseFormVisible}
                       onCancel={this.handleCancel.bind(this)}
                       footer={null}>
                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.hint}>会员卡策略号</div>
                            <Input className={styles.input}
                                   value={memberStrategyId} disabled={true}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.hint}>会员卡名称</div>
                            <Input className={styles.input} onChange={this.handleNameChange.bind(this)}
                                   value={memberStrategyName}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.hint}>初始金额</div>
                            <Input className={styles.input} onChange={this.handleThresholdChange.bind(this)}
                                   value={purchaseThreshold}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.hint}>折扣率(小数）</div>
                            <Input className={styles.input} onChange={this.handleRateChange.bind(this)}
                                   value={memberDiscountRate}/>
                        </div>
                        <div className={styles.footer}>
                            <Button type={'yellow'} onClick={this.handleSubmit.bind(this)}>提交修改</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default MemberCardReviseModal
