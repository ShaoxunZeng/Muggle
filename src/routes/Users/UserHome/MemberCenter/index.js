import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";
import Payment from "./components/Payment";
import RechargeHistory from "./components/RechargeHistory";
import {Tabs} from "antd";
import {getMemberInfo} from "../../../../services/apiMember";
import Button from "../../../../components/Button";
import PaymentInfoModal from "./PaymentInfoModal";


const {TabPane} = Tabs;

const testMemberInfo = {
    memberId: 1,
    memberStrategyName: '白金卡', // 约等于会员卡等级
    memberPictureurl: '',
    memberCredit: 100,
    memberDiscount: 0.7
};

class MemberCenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            memberInfo: {},
            isMember: false,
            paymentModalVisible: false
        }
    }

    componentWillMount() {
        //todo() 调用接口25 获取会员信息
        // getMemberInfo().then(res => {
        //         if (res.length > 1) {
        //             this.setState({
        //                 isMember: true,
        //                 memberInfo: res
        //             })
        //         }
        //     }
        // )
        this.setState({
            //   isMember: true,
            memberInfo: testMemberInfo
        })

    }

    handlePurchase = () => {
        this.setState({
            paymentModalVisible: true
        })
    };

    closePaymentModal = () => {
        this.setState({
            paymentModalVisible: false
        })
    };

    render() {
        const {isMember, memberInfo} = this.state;
        return (
            <div className={styles.whole}>
                {isMember ?
                    <div className={styles.wrapper}>
                        <Tabs type='card'>
                            <TabPane tab='我的会员卡' key='1'>
                                <div className={styles.innerWrapper}>
                                    <Payment/>
                                </div>
                            </TabPane>
                            <TabPane tab='充值记录' key='2'>
                                <div className={styles.innerWrapper}>
                                    <RechargeHistory/>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                    :
                    <div className={styles.wrapper2}>
                        <div className={styles.hint}>
                            <div className={styles.hintWrapper}>
                                <div className={styles.imgWrapper}>
                                    <img className={styles.img}
                                         src={'https://cdn.nlark.com/yuque/0/2019/png/248245/1559139789103-98db7385-6320-4f72-a2b2-daae85080a83.png'}
                                         alt={'logo'}/>
                                </div>
                                <div className={styles.msgWrapper}>
                                    <div className={styles.text}>您还未成为Muggle Cinema的会员</div>
                                    <Button type={'yellow'} onClick={this.handlePurchase}>立即成为会员</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <PaymentInfoModal paymentModalVisible={this.state.paymentModalVisible}
                                  closePaymentModal={this.closePaymentModal}
                />
            </div>
        )
    }
}

export default WithHeaderFooterSider(MemberCenter)

