import React, {Component} from "react";
import styles from './index.module.less'

export default function LoginBackground(WrappedComponent) {
    return class extends Component {
        render() {
            const {...passThroughProps} = this.props;
            return (
                <div className={styles.wholePage}>
                    <div className={styles.mainModule}>
                        <div className={styles.leftWrapper}>
                            <img className={styles.logo} src="https://cdn.nlark.com/yuque/0/2019/png/248245/1559139789103-98db7385-6320-4f72-a2b2-daae85080a83.png" alt="Muggle Logo"/>
                        </div>

                        <div className={styles.rightWrapper}>
                            <WrappedComponent {...passThroughProps}/>
                        </div>

                    </div>
                </div>

            )
        }

    }
}
