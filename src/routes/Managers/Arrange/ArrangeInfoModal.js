import {Form, Input, Modal, DatePicker, TimePicker, Select} from 'antd'
import Button from "../../../components/Button";
import React, {Component} from 'react'
import {getMoviesOnShelf} from "../../../services/apiMovies";
import {getAllHalls} from "../../../services/apiHalls";
import {addScene} from "../../../services/apiArrange";

const {Option} = Select;

const testMovieOnShelfInfo = [
    {
        isOnShow: true,// 已上映、未上映
        movieId: 1, // 电影Id
        movieName: '已上映电影1',// 电影名称
        movieType: '电影类别',// 电影类别（动作片）
        movieYear: 2019,// 电影年份
        movieLength: 120,// 电影时长
    },
    {
        isOnShow: false,// 已上映、未上映
        movieId: 2, // 电影Id
        movieName: '未映电影2',// 电影名称
        movieType: '电影类别',// 电影类别（动作片）
        movieYear: 2019,// 电影年份
        movieLength: 150,// 电影时长
    },
    {
        isOnShow: true,// 已上映、未上映
        movieId: 3,// 电影Id
        movieName: '已上映电影3',// 电影名称
        movieType: '电影类别',// 电影类别（动作片）
        movieYear: 2019,// 电影年份
        movieLength: 120,// 电影时长
    },
];
const testHallInfo = [
    {
        hallName: '1',
        seats: [[]]//0代表不可用，1代表可用
    },
    {
        hallName: '2',
        seats: [[]]//0代表不可用，1代表可用
    },
    {
        hallName: '3',
        seats: [[]]//0代表不可用，1代表可用
    },
];

class ArrangeInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieOnShelfInfo: [],
            hallInfo: []
        }
    }

    componentWillMount() {
        getMoviesOnShelf().then(res => this.setState({
                movieOnShelfInfo: res.map(movie =>
                    movie.movieId + ' ' + movie.movieName
                )
            })
        );
        getAllHalls().then(res => this.setState({
            hallInfo: res.map(hall =>
                hall.hallName)
        }));
        // this.setState({
        //     movieOnShelfInfo: testMovieOnShelfInfo.map(movie =>
        //         movie.movieId + ' ' + movie.movieName
        //     ),
        //     hallInfo: testHallInfo.map(hall => hall.hallName)
        // })
    }

    handleCancel = () => {
        this.props.closeArrangeInfoModal();
    };
    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const sceneInfo = {
                ...fieldsValue,
                'movieId':Number(fieldsValue['movieId'].split(' ')[0]),
                'price':Number(fieldsValue['price']),
                'date': fieldsValue['date'].format('YYYY-MM-DD'),
                'startTime':fieldsValue['startTime'].format('HH:mm')
            };
            console.log(sceneInfo);
            addScene(sceneInfo).then(res=>{
                alert('新增排片成功');
                setTimeout(this.props.closeArrangeInfoModal(),3000);
                setTimeout(  window.location.href = "/manage/arrange",300);


            })
        });
    };

    render() {
        const {arrangeFormVisible} = this.props;
        const {getFieldDecorator} = this.props.form;
        const {movieOnShelfInfo, hallInfo} = this.state;
        return (
            <div>
                <Modal title={'新增排片'}
                       visible={arrangeFormVisible}
                       onCancel={this.handleCancel}
                       footer={null}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item>
                            {getFieldDecorator('movieId')(
                                <Select placeholder={'选择电影'}>
                                    {
                                        movieOnShelfInfo.map(movieInfo => (
                                            <Option key={movieInfo}>{movieInfo}</Option>)
                                        )}
                                </Select>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('hallName')(
                                <Select placeholder={'选择影厅'}>
                                    {
                                        hallInfo.map(hall => (
                                            <Option key={hall}>{hall}</Option>
                                        ))
                                    }
                                </Select>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('date')(
                                <DatePicker placeholder={'排片日期'}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('startTime')(
                                <TimePicker placeholder={'开始时间'} format={'HH:mm'}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('price')(
                                <Input placeholder={'电影票价格'} suffix={'元'}/>)}
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

export default ArrangeInfoModal = Form.create()(ArrangeInfoModal)
