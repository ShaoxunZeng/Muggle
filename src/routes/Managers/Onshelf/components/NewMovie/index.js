import React, {Component} from 'react'
import styles from './index.module.less';
import {Form, Input, DatePicker, Row, Col, Collapse, Icon} from 'antd'
import Button from "../../../../../components/Button";
import {withRouter} from "react-router-dom";

const Panel = Collapse.Panel;

class NewMovie extends Component {
    constructor(props) {
        super(props)
    }

    handleCancel() {
        this.props.closeAddMoviePage();
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const customPanelStyle = {
            background: '#444343',
            border: 0,
            overflow: 'auto',
            fontSize: 16
        };


        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1', '2']}
                        expandIcon={({isActive}) => <Icon type="caret-right" style={{color: '#FFEB9E'}}
                                                          rotate={isActive ? 90 : 0}/>}>
                        <Panel header="电影信息" key="1" style={customPanelStyle}>
                            <Form layout={'horizontal'} className={styles.form}>
                                <Row gutter={24}>
                                    <Col span={9}>
                                        <Form.Item label={'电影名称'}>
                                            {getFieldDecorator('movieName')(
                                                <Input placeholder={'movieName'}/>)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={15}>
                                        <Form.Item label={'电影海报'}>
                                            {getFieldDecorator('posterUrl')(
                                                <Input placeholder={'posterUrl'}/>)}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item label={'电影描述'}>
                                    {getFieldDecorator('description')(
                                        <Input placeholder={'description'}/>)}
                                </Form.Item>
                                <Row gutter={24}>
                                    <Col span={9}>
                                        <Form.Item label={'电影类型'}>
                                            {getFieldDecorator('movieType')(
                                                <Input placeholder={'movieType'}/>)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item label={'电影年份'}>
                                            {getFieldDecorator('movieYear')(
                                                <Input suffix="年" placeholder={'movieYear'}/>)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item label={'国家'}>
                                            {getFieldDecorator('country')(
                                                <Input placeholder={'country'}/>)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item label={'时长'}>
                                            {getFieldDecorator('length')(
                                                <Input suffix="min" placeholder={'length'}/>)}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={24}>
                                    <Col span={12}>
                                        <Form.Item label={'导演'}>
                                            {getFieldDecorator('directors')(<Input/>)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label={'主演'}>
                                            {getFieldDecorator('starrings')(<Input/>)}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </Panel>
                        <Panel header="上架信息" key="2" style={customPanelStyle}>
                            <Form>
                                <Row gutter={24}>
                                    <Col span={6}>
                                        <Form.Item label={'上映日期'}>
                                            {getFieldDecorator('dateOnShow')(
                                                <DatePicker placeholder={'dataOnShow'}/>)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item label={'排片信息观众可见日期'}>
                                            {getFieldDecorator('visibleDate')(
                                                <DatePicker placeholder={'visibleDate'}/>)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item label={'上架开始日期'}>
                                            {getFieldDecorator('startDate')(
                                                <DatePicker placeholder={'startDate'}/>)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item label={'上架结束日期'}>
                                            {getFieldDecorator('endDate')(
                                                <DatePicker placeholder={'endDate'}/>)}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>

                        </Panel>
                    </Collapse>
                    <div className={styles.footer}>
                        <Button type={'gray'}
                                onClick={this.handleCancel.bind(this)}>取消</Button>
                        <Button type={'yellow'}>提交</Button>
                    </div>
                </div>

            </div>
        );
    }
}

export default NewMovie = Form.create()(withRouter(NewMovie))
