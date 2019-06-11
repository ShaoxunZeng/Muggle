import React, {Component} from 'react'
import styles from './index.module.less';

class MemberCard extends Component {
    componentWillMount() {
        console.log(this.props.memberInfo)
    }

    render() {
        const memberInfo = this.props.memberInfo;
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <div className={styles.imgWrapper}>
                        <img className={styles.img}
                             src={'https://cdn.nlark.com/yuque/0/2019/png/248245/1559139789103-98db7385-6320-4f72-a2b2-daae85080a83.png'}
                             alt={'logo'}>
                        </img>
                    </div>
                    <div className={styles.divider}/>
                    <div className={styles.infoWrapper}>
                        <div className={styles.vip}>
                            VIP
                        </div>

                        <div className={styles.balanceInfo}>
                            {memberInfo.memberStrategyName}
                            <div className={styles.dot}/>
                            观影{memberInfo.memberDiscount * 10}折优惠
                        </div>
                        < div className={styles.type}>
                            您的余额: <em className={styles.balance}> {memberInfo.memberCredit}</em>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default MemberCard
