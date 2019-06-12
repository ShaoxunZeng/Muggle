import React, {Component} from 'react'
import {Icon, Popconfirm, Table} from 'antd'
import {delMemberCard, getMemberCards} from "../../../../../services/apiStrategy";
import Button from "../../../../../components/Button";
import MemberCardInfoModal from "./MemberCardInfoModal";

const testMemberCardInfo = [
    {
        memberStrategyId: 1,
        memberStrategyName: '',
        memberPictureUrl: '',
        purchaseThreshold: 1, // 购买(初始充值)起始金额
        memberDiscountRate: 1 // 折扣率
    },
    {
        memberStrategyId: 1,
        memberStrategyName: '',
        memberPictureUrl: '',
        purchaseThreshold: 1, // 购买(初始充值)起始金额
        memberDiscountRate: 1 // 折扣率
    },
    {
        memberStrategyId: 1,
        memberStrategyName: '',
        memberPictureUrl: '',
        purchaseThreshold: 1, // 购买(初始充值)起始金额
        memberDiscountRate: 1 // 折扣率
    }
];

class MemberCardStrategy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberCardInfo: []
        }
    }

    componentWillMount() {
        getMemberCards().then(res => {
            this.setState({
                memberCardInfo: res,
                memberCardFormVisible: false
            })
        });
        // this.setState({
        //     memberCardInfo: testMemberCardInfo,
        //     memberCardFormVisible:false
        // })
    }

    deleteMemberCard = memberStrategyId => {
        delMemberCard(memberStrategyId).then(res => {
            console.log(res);
            this.setState({
                memberCardInfo: this.state.memberCardInfo.filter(memberCard => memberCard.memberStrategyId !== memberStrategyId)
            });
        })
    };

    showMemberCardForm = () => {
        this.setState({
            memberCardFormVisible: true
        })
    };

    closeMemberCardInfoModal = () => {
        this.setState({
            memberCardFormVisible: false
        })
    };

    operation = () => {
        return (
            <div>
                <span>操作</span>
                <Icon style={{fontSize: '18px', marginLeft: '10px', color: '#FFEB9E'}} type="plus-circle"
                      onClick={this.showMemberCardForm}/>
                <MemberCardInfoModal memberCardFormVisible={this.state.memberCardFormVisible}
                                     closeMemberCardInfoModal={this.closeMemberCardInfoModal}
                />

            </div>)
    };

    columns = [
        {
            title: '编号', align: 'center', dataIndex: 'memberStrategyId', key: 'memberStrategyId'
        },
        {
            title: '会员卡名称', align: 'center', dataIndex: 'memberStrategyName', key: 'memberStrategyName'
        },
        {
            title: '初始金额', align: 'center', dataIndex: 'purchaseThreshold', key: 'purchaseThreshold'
        },
        {
            title: '折扣率', align: 'center', dataIndex: 'memberDiscountRate', key: 'memberDiscountRate'
        },
        {
            title: this.operation, align: 'center', dataIndex: 'delete',
            render: (text, record) =>
                this.state.memberCardInfo.length >= 1 ? (
                    <Popconfirm title="确认删除该类会员卡吗？" onConfirm={() => this.deleteMemberCard(record.memberStrategyId)}>
                        <Button type='yellow'>Delete</Button>
                    </Popconfirm>
                ) : null,
        }
    ];

    render() {
        const {memberCardInfo} = this.state;
        return (
            <div>
                <Table columns={this.columns} dataSource={memberCardInfo}/>
            </div>
        );
    }
}

export default MemberCardStrategy
