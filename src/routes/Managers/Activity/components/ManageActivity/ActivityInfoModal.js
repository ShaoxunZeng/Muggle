import React, {Component} from 'react'
import {Form, Select, Modal, Input, DatePicker} from 'antd'
import Button from "../../../../../components/Button";
import {addActivity} from "../../../../../services/apiActivity";

const {Option} = Select;

class ActivityInfoModal extends Component {
    constructor(props) {
        super(props)
    }


    handleCancel = () => {
        this.props.closeActivityInfoModal();
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const activityInfo = {
                ...fieldsValue,
                'moviesIncluded': fieldsValue['moviesIncluded'].map(movieInfo => (Number(movieInfo.split(' ')[0]))),//传movieId列表
                'couponDiscount': Number(fieldsValue['couponDiscount']),
                'couponThreshold': Number(fieldsValue['couponThreshold']),
                'startTime': fieldsValue['startTime'].format('YYYY-MM-DD'),
                'endTime': fieldsValue['endTime'].format('YYYY-MM-DD'),
                'couponExpiration': Number(fieldsValue['couponExpiration'])
            };
            console.log(activityInfo);
            addActivity(activityInfo).then(res => {
                    console.log(res);
                    alert('新增活动成功');
                    setTimeout(this.props.closeActivityInfoModal(), 5000);
                    this.forceUpdate();
                }
            );

        });

    };

    render() {
        const {activityFormVisible, movieOnShelfInfo} = this.props;
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Modal
                    title="新活动信息"
                    visible={activityFormVisible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item>
                            {getFieldDecorator('eventName')(
                                <Input placeholder={'活动名称'}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('eventDescription')(
                                <Input placeholder={'活动描述'}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('moviesIncluded')(
                                <Select mode="multiple"
                                        placeholder="参与电影">
                                    {
                                        movieOnShelfInfo.map(movieInfo => (
                                            <Option key={movieInfo.split()[0]}>{movieInfo}</Option>)
                                        )}
                                </Select>
                            )}
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
                            {getFieldDecorator('couponName')(
                                <Input placeholder={'优惠券名称'}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('couponDescription')(
                                <Input placeholder={'优惠券描述'}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('couponThreshold')(
                                <Input placeholder={'使用门槛(填写数字)'} suffix={'元'}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('couponDiscount')(
                                <Input placeholder={'折扣'} suffix={'元'}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('couponExpiration')(
                                <Input placeholder={'优惠券有效期'} suffix={'天'}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('couponPictureUrl')(
                                <Input placeholder={'优惠券图片'}/>)}
                        </Form.Item>
                        <Form.Item style={{textAlign: 'right'}}>
                            <Button type={'yellow'} htmlType={'submit'}>
                                确认添加
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

            </div>
        );
    }
}

export default ActivityInfoModal = Form.create()(ActivityInfoModal)
