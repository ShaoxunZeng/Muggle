import React, {Component} from 'react'
import styles from './index.module.less';
import {Form, Input, DatePicker, Row, Col, Collapse, Icon} from 'antd'
import Button from "../../../../../components/Button";
import {addMovieOnShelf} from "../../../../../services/apiOnShelf";

const Panel = Collapse.Panel;
const InputGroup = Input.Group;

class NewMovie extends Component {
    constructor(props) {
        super(props);
    };

    handleCancel() {
        this.props.closeAddMoviePage();
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('submit');
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                alert(err);
            }
            const movieInfo = {
                ...fieldsValue,
                'dateOnShow': fieldsValue['dateOnShow'].format('YYYY-MM-DD'),
                'visibleDate': fieldsValue['visibleDate'].format('YYYY-MM-DD'),
                'directors': [{
                    'name': fieldsValue['directorName'],
                    'url': fieldsValue['directorUrl']
                }],
                'starrings': [{
                    'name': fieldsValue['starringName'],
                    'url': fieldsValue['starringUrl']
                }]

            };
            addMovieOnShelf(movieInfo).then(res => {
                alert('新增电影成功！');
                setTimeout(this.props.closeAddMoviePage(), 3000)
                console.log(res)
            });
        })
    };

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
                            <Form layout={'horizontal'} className={styles.form} onSubmit={this.handleSubmit}>
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
                                <Row gutter={24}>
                                    <Col span={9}>
                                        <Form.Item label={'电影语言'}>{
                                            getFieldDecorator('language')(
                                                <Input placeholder={'language'}/>
                                            )
                                        }
                                        </Form.Item>
                                    </Col>
                                    <Col span={15}>
                                        <Form.Item label={'电影描述'}>
                                            {getFieldDecorator('description')(
                                                <Input placeholder={'description'}/>)}
                                        </Form.Item>
                                    </Col>
                                </Row>


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
                                        <Form.Item label={"导演"}>

                                            <InputGroup size="large" style={{marginBottom: 15}}>
                                                <Row gutter={8}>
                                                    <Col span={8}>
                                                        {getFieldDecorator('directorName')(
                                                            <Input placeholder={'name'}/>
                                                        )}
                                                    </Col>
                                                    <Col span={12}>
                                                        {getFieldDecorator('directorUrl')(
                                                            <Input placeholder={'url'}/>
                                                        )}
                                                    </Col>
                                                    {/*<Col span={2}>*/}
                                                    {/*<Icon type="plus-circle"*/}
                                                    {/*className={styles.addIcon}*/}
                                                    {/*onClick={this.addDirector.bind(this)}/>*/}
                                                    {/*</Col>*/}
                                                </Row>
                                            </InputGroup>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label={"主演"}>
                                            <InputGroup size="large" style={{marginBottom: 15}}>
                                                <Row gutter={8}>
                                                    <Col span={8}>
                                                        {getFieldDecorator('starringName')(
                                                            <Input placeholder={'name'}/>
                                                        )}
                                                    </Col>
                                                    <Col span={12}>
                                                        {getFieldDecorator('starringUrl')(
                                                            <Input placeholder={'url'}/>
                                                        )}
                                                    </Col>

                                                    {/*<Col span={2}>*/}
                                                    {/*<Icon type="plus-circle" className={styles.addIcon}*/}
                                                    {/*onClick={this.addStarring.bind(this)}*/}
                                                    {/*/>*/}
                                                    {/*</Col>*/}
                                                </Row>
                                            </InputGroup>
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
                                    <Col span={6} offset={6}>
                                        <Form.Item label={'排片信息观众可见日期'}>
                                            {getFieldDecorator('visibleDate')(
                                                <DatePicker placeholder={'visibleDate'}/>)}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item>
                                    <div className={styles.footer}>
                                        <Button type={'gray'}
                                                onClick={this.handleCancel.bind(this)}>取消</Button>
                                        <Button type={'yellow'} htmlType='submit'
                                                onClick={this.handleSubmit.bind(this)}
                                        >提交</Button>
                                    </div>
                                </Form.Item>
                            </Form>

                        </Panel>
                    </Collapse>

                </div>

            </div>
        )
            ;
    }
}

export default NewMovie = Form.create()(NewMovie)
