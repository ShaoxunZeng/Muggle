import React, {Component} from 'react'
import {Modal, Form, Input} from 'antd'
import Button from "../../../../../../../components/Button";
import {rechargeMemberCard} from "../../../../../../../services/apiMember";
import {getMemberCards} from "../../../../../../../services/apiStrategy";
import {Radio} from "antd/lib/radio";

class RechargeInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberCards: []
        }
    }

    componentWillMount() {
        getMemberCards().then(res => {
            this.setState({
                memberCards: res
            })
        })
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
                    {

                        memberCards.map(memberCard =>
                            <div>
                                {memberCard.memberStrategyName + ' 满' + memberCard.purchaseThreshold + '打' + memberCard.memberDiscountRate * 10 + '折'}
                            </div>
                        )


                    }
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
