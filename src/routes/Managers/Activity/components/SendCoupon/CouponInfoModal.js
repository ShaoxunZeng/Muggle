import React, {Component} from 'react'
import {Input, DatePicker, Modal, Form} from 'antd'
import Button from "../../../../../components/Button";
import {sendCoupon} from "../../../../../services/apiActivity";


class CouponInfoModal extends Component {
    constructor(props) {
        super(props);

    }


    //取消发放优惠券
    handleCancel = () => {
        this.props.closeCouponInfoModal();
    };

    //提交信息
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const couponInfo = {
                ...fieldsValue,
                'couponDiscount': Number(fieldsValue['couponDiscount']),
                'couponThreshold': Number(fieldsValue['couponThreshold']),
                'startTime': fieldsValue['startTime'].format('YYYY-MM-DD'),
                'endTime': fieldsValue['endTime'].format('YYYY-MM-DD'),
                'userList': this.props.userList
            };
            console.log(couponInfo);

            sendCoupon(couponInfo).then(res => {
                console.log(res);
                alert('成功赠送优惠券！');
                setTimeout(this.props.closeCouponInfoModal(), 4000);
                window.location.href = '/manage/activity';


            });

        });
    };


    render() {
        const {couponFormVisible} = this.props;
        const {getFieldDecorator} = this.props.form;
        return (
            <Modal title='优惠券信息' visible={couponFormVisible}
                   onCancel={this.handleCancel}
                   footer={null}
            >

                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Item>
                        {getFieldDecorator('couponName')(
                            <Input placeholder={'优惠券名称'}/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('couponDescription')(
                            <Input placeholder={'优惠券描述'}/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('startTime')(
                            <DatePicker placeholder={'开始时间'}/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('endTime')(
                            <DatePicker placeholder={'结束时间'}/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('couponThreshold')(
                            <Input placeholder={'使用门槛'} suffix={'元'}/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('couponDiscount')(
                            <Input placeholder={'折扣'} suffix={'元'}/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('couponPictureUrl')(
                            <Input placeholder={'优惠券图片'}/>)}
                    </Form.Item>
                    <Form.Item style={{textAlign: 'right'}}>
                        <Button type={'yellow'} htmlType={'submit'}>
                            确认赠送
                        </Button>
                    </Form.Item>

                </Form>
            </Modal>
        );
    }

}

export default CouponInfoModal = Form.create()(CouponInfoModal);
