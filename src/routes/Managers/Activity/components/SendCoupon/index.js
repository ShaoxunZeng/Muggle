import React, {Component} from 'react'
import {Table, Tag} from 'antd'
import CouponInfoModal from "./CouponInfoModal";


class SendCoupon extends Component {
    constructor(props) {
        super(props);
        this.state = (
            {
                selectedRowKeys: [],
                couponFormVisible: false
            }
        )

    }

    columns = [
        {title: '用户Id', align: 'center', dataIndex: 'userId', key: 'userId'},
        {title: '用户累计消费', align: 'center', dataIndex: 'userTotalConsumption', key: 'userTotalConsumption'},
        {
            title: '用户类别', align: 'center', dataIndex: 'isMember', key: 'isMember',
            filters: [
                {text: 'VIP', value: true},
                {text: '普通', value: false}

            ],
            onFilter: (value, record) => record.isMember === value,
            render: isMember => (
                <Tag color={isMember ? 'gold' : 'grey'}>{isMember ? 'VIP' : '普通'}</Tag>
            )
        },
        {
            title: '会员卡余额', align: 'center', dataIndex: 'memberCredit', key: 'memberCredit',
            render: memberCredit => (
                <span>{memberCredit === -1 ? '暂无会员卡' : memberCredit}</span>
            )
        }
    ];


    onChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    closeCouponInfoModal = () => {
        this.setState({
            couponFormVisible: false
        })
    };


    render() {
        const {briefUserInfo} = this.props;
        const {selectedRowKeys, couponFormVisible} = this.state;
        const rowSelection = {
                selectedRowKeys,
                onChange: this.onSelectChange,
                hideDefaultSelections: true,
                selections: [
                    {
                        key: 'sendCoupon',
                        text: '赠送优惠券',
                        onSelect: () => {
                            this.setState({
                                couponFormVisible: true
                            })
                        }
                    }],
                onSelection: this.onSelection,
            }
        ;
        return (
            <div>
                <Table columns={this.columns} dataSource={briefUserInfo}
                       rowKey={record => record.userId}
                       rowSelection={rowSelection}
                       onChange={this.onChange}>
                </Table>
                <CouponInfoModal couponFormVisible={couponFormVisible}
                                 closeCouponInfoModal={this.closeCouponInfoModal}
                                 userList={this.state.selectedRowKeys}
                />

            </div>
        );
    }
}

export default SendCoupon
