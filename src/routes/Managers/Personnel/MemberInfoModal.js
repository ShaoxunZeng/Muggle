import React, {Component} from 'react'
import {addManager} from "../../../services/apiPersonnel";
import {Form, Input, Modal} from 'antd'
import Button from "../../../components/Button";

class MemberInfoModal extends Component {
    constructor(props) {
        super(props);
    }

    //取消更改
    handleCancel = () => {
        this.props.closeMemberInfoModal();
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                console.log(value);
                //TODO() 调用接口47 新增管理员
                // addManager(value)
            }
        });
        this.props.closeMemberInfoModal();
    };

    render() {
        const {managerFormVisible}=this.props;
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Modal title='新增管理员'
                       visible={managerFormVisible}
                       onCancel={this.handleCancel}
                       footer={null}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item>
                            {getFieldDecorator('username')(
                                <Input placeholder={'管理员用户名'}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password')(
                                <Input placeholder={'管理员密码'}/>)}
                        </Form.Item>
                        <Form.Item style={{textAlign:'right'}}>
                            <Button type={'yellow'} htmlType={'submit'}>
                                确认新增
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default MemberInfoModal = Form.create()(MemberInfoModal);




