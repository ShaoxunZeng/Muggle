import React, {Component} from 'react'
import {Form, Modal, Input} from 'antd'
import Button from "../../../../../components/Button";

class MemberCardReviseCard extends Component {
    constructor(props) {
        super(props);

    };

    componentWillMount() {
        this.state = {
            memberStrategyId: 1,
            memberStrategyName: '',
            memberPictureUrl: '',
            purchaseThreshold: 0, // 购买(初始充值)起始金额
            memberDiscountRate: 0 // 折扣率
        }
    }

    handleCancel = () => {
        this.props.closeMemberCardReviseModal();
    };
    handleSubmit = () => {

    };

    render() {
        const {memberCardReviseFormVisible, memberCardReviseInfo} = this.props;
        return (
            <div>
                <Modal title={'修改会员卡信息'}
                       visible={memberCardReviseFormVisible}
                       onCancel={this.handleCancel.bind(this)}
                       footer={null}>
                </Modal>
            </div>
        )
    }
}

export default MemberCardReviseCard
