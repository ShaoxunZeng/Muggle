import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {Icon, Tabs, Popconfirm, Table} from 'antd'
import {delManager, getAllManagers} from "../../../services/apiPersonnel";
import Button from "../../../components/Button";
import ManagerInfoModal from "./ManagerInfoModal";

const {TabPane} = Tabs;

const testManagerList = [
    {managerId: 1, username: 'manger1', password: '123'},
    {managerId: 2, username: 'manager2', password: '456'},
    {managerId: 3, username: 'manager3', password: '789'}
];

class Personnel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = ({
            managerList: [],
            managerFormVisible:false
        })
    };

    componentWillMount() {
        //TODO 调用接口49 查看所有管理员列表
        // getAllManagers()
        this.setState({
            managerList: testManagerList,
            managerFormVisible: false
        })
    }

    deleteManager = (managerId) => {
        this.setState({
            managerList: this.state.managerList.filter(manager => manager.managerId !== managerId)
        });
        console.log('删除该工号管理员' + managerId);

        //TODO() 调用接口48 删除管理员 Bug: 同删除活动 第一次删除无效
        // delManager(managerId)
    };

    showManagerForm = () => {
        this.setState({
            managerFormVisible: true
        })
    };

    closeManagerInfoModal = () => {
        this.setState({
            managerFormVisible: false
        })
    };

    operation = () => {
        return (
            <div>
                <span>操作</span>
                <Icon style={{fontSize: '18px', marginLeft: '10px', color: '#FFEB9E'}} type="plus-circle"
                      onClick={this.showManagerForm}/>
                <ManagerInfoModal managerFormVisible={this.state.managerFormVisible}
                                 closeMemberInfoModal={this.closeManagerInfoModal}/>
            </div>
        )
    };

    columns = [
        {title: '工号', align: 'center', dataIndex: 'managerId', key: 'managerId'},
        {title: '用户名', align: 'center', dataIndex: 'username', key: 'username'},
        {title: '密码', align: 'center', dataIndex: 'password', key: 'password'},
        {
            title: this.operation, align: 'center', dataIndex: 'delete',
            render: (text, record) =>
                this.state.managerList.length >= 1 ? (
                    <Popconfirm title="确认删除该管理员吗？" onConfirm={() => this.deleteManager(record.managerId)}>
                        <Button type='yellow'>Delete</Button>
                    </Popconfirm>
                ) : null,
        }

    ];

    render() {
        const {managerList} = this.state;
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <Tabs type='card'>
                        <TabPane tab={'管理员列表'} key='1'>
                            <Table columns={this.columns} dataSource={managerList}
                                   rowKey={record => record.managerId}
                            />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    };
}

export default WithSider(Personnel);
