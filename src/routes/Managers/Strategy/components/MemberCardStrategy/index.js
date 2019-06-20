import React, {Component} from 'react'
import styles from './index.module.less'
import {Icon, Popconfirm, Table} from 'antd'
import {delMemberCard, getMemberCards} from "../../../../../services/apiStrategy";
import Button from "../../../../../components/Button";
import MemberCardInfoModal from "./MemberCardInfoModal";
import MemberCardReviseModal from "./MemberCardReviseModal";

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
            memberCardInfo: [],
            memberCardReviseInfo: testMemberCardInfo[0]
        }
    }

    componentWillMount() {
        getMemberCards().then(res => {
            this.setState({
                memberCardInfo: res,
                memberCardFormVisible: false,
                memberCardReviseFormVisible: false
            })
        });
        // this.setState({
        //     memberCardInfo: testMemberCardInfo,
        //     memberCardFormVisible:false
        // })
    }

    deleteMemberCard = memberStrategyId => {
        console.log(memberStrategyId);
        delMemberCard(memberStrategyId).then(res => {
            alert('删除成功！');
            this.setState({
                memberCardInfo: this.state.memberCardInfo.filter(memberCard => memberCard.memberStrategyId !== memberStrategyId)
            });

        }).catch(res => {
            alert('该会员卡已有用户使用，不可删除！')
        })

    };

    showMemberCardForm = () => {
        this.setState({
            memberCardFormVisible: true
        })
    };

    changeMemberCardInfo = (memberCard) => {
       // console.log(memberCard);
        this.setState({
            memberCardReviseFormVisible: true,
            memberCardReviseInfo: memberCard
        })
    };


    closeMemberCardInfoModal = () => {
        this.setState({
            memberCardFormVisible: false
        })
    };

    closeMemberCardReviseModal = () => {
        this.setState({
            memberCardReviseFormVisible: false
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
                    <div className={styles.buttonGroup}>
                        <div className={styles.changeButton}>
                            <Button type='yellow' onClick={() => this.changeMemberCardInfo(record)}>修改
                            </Button>
                            <MemberCardReviseModal memberCardReviseFormVisible={this.state.memberCardReviseFormVisible}
                                                   closeMemberCardReviseModal={this.closeMemberCardReviseModal}
                                                   memberStrategyId={this.state.memberCardReviseInfo.memberStrategyId}
                                                   memberStrategyName={this.state.memberCardReviseInfo.memberStrategyName}
                                                   purchaseThreshold={this.state.memberCardReviseInfo.purchaseThreshold}
                                                   memberDiscountRate={this.state.memberCardReviseInfo.memberDiscountRate}
                            />
                        </div>
                        <Popconfirm title="确认删除该类会员卡吗？"
                                    onConfirm={() => this.deleteMemberCard(record.memberStrategyId)}>
                            <Button type='gray'>删除</Button>
                        </Popconfirm>
                    </div>
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
