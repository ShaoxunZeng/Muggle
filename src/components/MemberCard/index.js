import React, {Component} from 'react'
import styles from './index.module.less';

class MemberCard extends Component {
    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <div className={styles.imgWrapper}>
                        <img className={styles.img}
                             src={'https://cdn.nlark.com/yuque/0/2019/png/248245/1559139789103-98db7385-6320-4f72-a2b2-daae85080a83.png'}
                             alt={'logo'}>
                        </img>
                    </div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.info}>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default MemberCard
