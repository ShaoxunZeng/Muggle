import React, {Component} from 'react'
import {Form, Modal, Input} from 'antd'
import Button from "../../../../../components/Button";
import {addMemberCard} from "../../../../../services/apiStrategy";

class MemberCardInfoModal extends Component {
    constructor(props) {
        super(props)
    }

    handleCancel = () => {
        this.props.closeMemberCardInfoModal();
    };

    handleSubmit = () => {
        // e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const newMemberCard = {
                ...fieldsValue,
                "memberDiscountRate": Number(fieldsValue['memberDiscountRate']),
                "purchaseThreshold": Number(fieldsValue['purchaseThreshold']),
                memberPictureUrl:''
            };
            console.log(newMemberCard);

            addMemberCard(newMemberCard).then(res=>{
                console.log(res);
                this.props.closeMemberCardInfoModal();

            });
        });


    };


    render() {
        const {memberCardFormVisible} = this.props;
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal title={'新会员卡信息'}
                       visible={memberCardFormVisible}
                       onCancel={this.handleCancel}
                       footer={null}>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item>
                            {getFieldDecorator('memberStrategyName')(
                                <Input placeholder={'会员卡名称'}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('purchaseThreshold')(
                                <Input placeholder={'初始金额(输入数字)'}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('memberDiscountRate')(
                                <Input placeholder={'折扣率(输入小数)'}/>
                            )}
                        </Form.Item>
                        <Form.Item style={{textAlign: 'right'}}>
                            <Button type={'yellow'} htmlType={'submit'}>
                                确认添加
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )

    }
}

export default MemberCardInfoModal = Form.create()(MemberCardInfoModal)
