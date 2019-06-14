import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";
import Payment from "./components/Payment";
import RechargeHistory from "./components/RechargeHistory";
import {getMemberInfo, getRechargeHistory} from "../../../../services/apiMember";
import Button from "../../../../components/Button";
import PaymentInfoModal from "./PaymentInfoModal";


const testMemberInfo = {
    memberId: 1,
    memberStrategyName: '白金卡', // 约等于会员卡等级
    memberPictureurl: '',
    memberCredit: 100,
    memberDiscount: 0.7
};

const testRechargeHistory = [
    {
        time: '2019-06-01',// 充值时间
        cost: 100// 充值记录
    },
    {
        time: '2019-05-10',// 充值时间
        cost: 200// 充值记录
    }
];

class MemberCenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            memberInfo: {},
            rechargeHistory: [],
            isMember: false,
            paymentModalVisible: false
        }
    }

    componentWillMount() {
        getMemberInfo().then(res => {
                console.log(res);
                this.setState({
                    isMember: true,
                    memberInfo: res
                })
            }
        ).catch(err => {
            console.log(err)
        });

        getRechargeHistory().then(res => {
            this.setState({
                rechargeHistory: res
            })
        });

        // this.setState({
        //     isMember: true,
        //     memberInfo: testMemberInfo,
        //     rechargeHistory: testRechargeHistory
        // })

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
        const {isMember, memberInfo, rechargeHistory} = this.state;
        return (
            <div className={styles.whole}>
                {isMember ?
                    <div className={styles.wrapper}>
                        <div className={styles.paymentWrapper}>
                            <Payment memberInfo={memberInfo}/>
                        </div>
                        <div className={styles.rechargeWrapper}>
                            <RechargeHistory rechargeHistory={rechargeHistory}
                                             memberId={memberInfo.memberId}
                            />
                        </div>
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

