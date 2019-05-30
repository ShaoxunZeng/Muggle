import React, {Component} from 'react'
import {Table, Descriptions} from 'antd'


const columns = [
    {title: '活动编号', align: 'center', dataIndex: 'eventId', key: 'eventId'},
    {title: '活动名称', align: 'center', dataIndex: 'eventName', key: 'eventName'},
    {title: '活动描述', align: 'center', dataIndex: 'eventDescription', key: 'eventDescription'},
    {title: '开始时间', align: 'center', dataIndex: 'startTime', key: 'startTime'},
    {title: '结束时间', align: 'center', dataIndex: 'endTime', key: 'endTime'},

];

function CustomExpandIcon(props) {
    let text;
    if (props.expanded) {
        text = '&#9650';
    } else {
        text = '&#9660';
    }
    return (
        <a
            onClick={e => props.onExpand(props.record, e)}
            dangerouslySetInnerHTML={{__html: text}}
            style={{color: '#FFEB9E', cursor: 'pointer'}}
        />
    );
}

class ManageActivity extends Component {
    constructor(props) {
        super(props)
    }

    onExpand = (expanded, record) => {
        console.log('onExpand', expanded, record);
    };

    CustomExpandContent = (record) => {
        return (
            <div>
                <Descriptions
                    title={"优惠券名称： " + record.couponName}
                    border>
                    <Descriptions.Item label="优惠券描述" span={3}>{record.couponDescription}</Descriptions.Item>
                    <Descriptions.Item label="有效时长">{record.couponExpiration}</Descriptions.Item>
                    <Descriptions.Item label="门槛">{record.couponThreshold + '元'}</Descriptions.Item>
                    <Descriptions.Item label="折扣">{record.couponDiscount}</Descriptions.Item>
                    <Descriptions.Item label="图片">{record.couponPictureUrl}</Descriptions.Item>
                </Descriptions>
            </div>

        )
    }

    render() {
        const {activities} = this.props;
        return (
            <div>
                <Table columns={columns} dataSource={activities}
                       expandIcon={CustomExpandIcon}
                       expandedRowRender={this.CustomExpandContent}
                       onExpand={this.onExpand}
                       expandIconAsCell
                       rowKey={record => record.id}
                />
            </div>
        );
    }
}

export default ManageActivity
