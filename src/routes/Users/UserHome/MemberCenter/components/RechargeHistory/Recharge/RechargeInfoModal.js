import React, {Component} from 'react'
import {Modal, Form, Input} from 'antd'
import Button from "../../../../../../../components/Button";
import {rechargeMemberCard} from "../../../../../../../services/apiMember";
import {getMemberCards} from "../../../../../../../services/apiStrategy";
import {Radio} from "antd/lib/radio";
import styles from './index.module.less'

class RechargeInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberCards: []
        }
    }

    componentWillMount() {
        getMemberCards().then(res => {
            let memberCards = res.sort((a, b) => (a.purchaseThreshold - b.purchaseThreshold));
            let memberStrategyName = this.props.memberStrategyName;
            let currentCard = memberCards.filter(memberCard => memberCard.memberStrategyName === memberStrategyName)[0];
            console.log(currentCard);
            this.setState({
                memberCards: memberCards.filter(memberCard => memberCard.purchaseThreshold > currentCard.purchaseThreshold)
            });
        });

    }

    handleCancel = () => {
        this.props.closeRechargeInfoModal();
    };

    handleSubmit = e => {
        // e.preventDefault();
        this.props.form.validateFields((err, value) => {

            if (!err) {
                const paymentInfo = {
                    'cost': Number(value['cost']),
                    'memberId': this.props.memberId
                };
                console.log(paymentInfo);
                rechargeMemberCard(paymentInfo).then(res => {
                    console.log(res)
                })
            }
        });

    };


    render() {
        const {RechargeFormVisible} = this.props;
        const {getFieldDecorator} = this.props.form;
        const {memberCards} = this.state;

        return (
            <div>
                <Modal visible={RechargeFormVisible} title={'VIP充值'}
                       onCancel={this.handleCancel}
                       footer={null}>
                    <div className={styles.text}>
                        {
                            memberCards.length === 0 ?
                                <div className={styles.hint}>
                                    您已是Muggle影院的顶级会员
                                </div> :
                                memberCards.map(memberCard =>
                                    <div className={styles.hint}>
                                        {'充值满' + memberCard.purchaseThreshold + '元  即可升级为' + memberCard.memberStrategyName + '  享受' + memberCard.memberDiscountRate * 10 + '折优惠'}
                                    </div>
                                )


                        }
                    </div>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item>
                            {getFieldDecorator('cost')(
                                <Input placeholder={'充值金额'} suffix={'元'}/>
                            )}
                        </Form.Item>
                        <Form.Item style={{textAlign: 'right'}}>
                            <Button type={'yellow'} htmlType={'submit'}>
                                确认充值
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

            </div>
        );


    }
}

export default RechargeInfoModal = Form.create()(RechargeInfoModal)
