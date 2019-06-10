import React, {Component} from 'react'
import {Modal, Form, Input, Radio, Row, Col} from 'antd'
import {getMemberCards} from "../../../../services/apiStrategy";
import Button from "../../../../components/Button";
import {purchaseMemberCard} from "../../../../services/apiMember";

const testMemberCards = [
    {
        memberStrategyId: 1,
        memberStrategyName: 'VIP1卡',
        memberPictureUrl: '',
        purchaseThreshold: 100, // 购买(初始充值)起始金额
        memberDiscountRate: 0.9 // 折扣率
    },
    {
        memberStrategyId: 2,
        memberStrategyName: 'VIP2卡',
        memberPictureUrl: '',
        purchaseThreshold: 500, // 购买(初始充值)起始金额
        memberDiscountRate: 0.8 // 折扣率
    },
    {
        memberStrategyId: 3,
        memberStrategyName: 'VIP3卡',
        memberPictureUrl: '',
        purchaseThreshold: 1000, // 购买(初始充值)起始金额
        memberDiscountRate: 0.7 // 折扣率
    },
];

class PaymentInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberCards: [],
            purchaseThreshold: 0
        }
    }

    componentWillMount() {

        //todo() 调用接口27 获取所有会员卡信息
        // getMemberCards()
        this.setState({
            memberCards: testMemberCards
        })
    }

    handleChange = e => {
        let id = e.target.value;
        let memberCard = this.state.memberCards.filter(memberCard =>
            memberCard.memberStrategyId === id
        );
        this.setState({
            purchaseThreshold: memberCard[0].purchaseThreshold
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                const paymentInfo = {
                    ...value,
                    'cost': Number(value['cost'])
                };
                console.log(paymentInfo);

                //todo() 调用接口26
                // purchaseMemberCard(paymentInfo);
                this.props.closePaymentModal();
            }


        });
    };

    validateCost = (rule, value, callback) => {
        if (value < this.state.purchaseThreshold) {
            callback('金额不得小于会员卡最低充值金额');
        } else {
            callback();
        }
    };


    render() {
        const {memberCards} = this.state;
        const {paymentModalVisible} = this.props;
        const {getFieldDecorator} = this.props.form;
        const radioStyle = {
            display: 'block',
            color: '#FFFFFF',
            height: '30px',
            lineHeight: '30px',
            letterSpacing:'2px',
            fontWeight:600
        };

        return (
            <div>
                <Modal title={'购买会员卡'}
                       visible={paymentModalVisible}
                       onCancel={this.props.closePaymentModal}
                       footer={null}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row gutter={18}>
                            <Col span={12}>
                                <Form.Item label={'请选择你想要的会员卡的类型'}>
                                    {getFieldDecorator('memberStrategyId', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择会员卡类型',
                                            }
                                        ]
                                    })(
                                        <Radio.Group>
                                            {
                                                memberCards.map(memberCard =>
                                                    <Radio value={memberCard.memberStrategyId} style={radioStyle}
                                                           onChange={this.handleChange}>
                                                        {memberCard.memberStrategyName + ' 满'+memberCard.purchaseThreshold + '打' +memberCard.memberDiscountRate*10+'折'}
                                                    </Radio>
                                                )

                                            }
                                        </Radio.Group>)
                                    }

                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={'请输入充值金额'}>
                                    {getFieldDecorator('cost', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入充值金额!',
                                            },
                                            {
                                                validator: this.validateCost,
                                            },
                                        ],
                                    })(<Input suffix={'元'}/>)}

                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item style={{textAlign: 'right'}}>
                            <Button type={'yellow'} htmlType={'submit'}>立即购买</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }

}

export default PaymentInfoModal = Form.create()(PaymentInfoModal);
