import React, {Component} from 'react'
import styles from './index.module.less';
import {Form, Input, DatePicker} from 'antd'

class NewMovie extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div className={styles.whole}>
                <Form layout={'inline'}>
                    <Form.Item label={'电影名称'}>
                        {getFieldDecorator('movieName')(<Input/>)}
                    </Form.Item>
                    <Form.Item label={'电影描述'}>
                        {getFieldDecorator('description')(<Input/>)}
                    </Form.Item>
                    <Form.Item label={'上映日期'}>
                        {getFieldDecorator('dateOnShow')(<DatePicker/>)}
                    </Form.Item>
                    <Form.Item label={'排片信息观众可见日期'}>
                        {getFieldDecorator('visibleDate')(<DatePicker/>)}
                    </Form.Item>
                    <Form.Item label={'开始日期'}>
                        {getFieldDecorator('startDate')(<DatePicker/>)}
                    </Form.Item>
                    <Form.Item label={'结束日期'}>
                        {getFieldDecorator('endDate')(<DatePicker/>)}
                    </Form.Item>
                    <Form.Item label={'电影海报'}>
                        {getFieldDecorator('posterUrl')(<Input/>)}
                    </Form.Item>
                    <Form.Item label={'电影类型'}>
                        {getFieldDecorator('movieType')(<Input/>)}
                    </Form.Item>
                    <Form.Item label={'电影年份'}>
                        {getFieldDecorator('movieYear')(<Input/>)}
                    </Form.Item>
                    <Form.Item label={'国家'}>
                        {getFieldDecorator('country')(<Input/>)}
                    </Form.Item>
                    <Form.Item label={'语言'}>
                        {getFieldDecorator('language')(<Input/>)}
                    </Form.Item>
                    <Form.Item label={'国家'}>
                        {getFieldDecorator('country')(<Input/>)}
                    </Form.Item>
                    <Form.Item label={'国家'}>
                        {getFieldDecorator('country')(<Input/>)}
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default NewMovie = Form.create()(NewMovie)
