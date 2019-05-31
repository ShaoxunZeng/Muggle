import React, {Component} from 'react'
import {Form, Select} from 'antd'
import {Input, DatePicker} from "antd";

class ActivityInfo extends Component {

    render() {
        return (
            <div>
                <Form>
                    <Form.Item>
                        <Input placeholder={'活动名称'}/>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={'活动描述'}/>
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="参与电影"/>
                    </Form.Item>
                    <Form.Item>
                        <DatePicker placeholder={'开始时间'}/>
                    </Form.Item>
                    <Form.Item>
                        <DatePicker placeholder={'结束时间'}/>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={'优惠券名称'}/>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={'优惠券描述'}/>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={'使用门槛'}/>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={'折扣'}/>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={'优惠券图片'}/>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default ActivityInfo
