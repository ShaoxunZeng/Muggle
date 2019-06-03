import React, {Component} from "react";
import styles from './index.module.less';
import Header from "../Header";
import Footer from "../Footer";
import UserSider from "../UserSider";


export default function WithHeaderFooterSider(WrapperComponent) {
    return class extends Component {
        render() {
            const {...passThroughProps} = this.props;
            return (
                <div className={styles.wholeBody}>
                    <Header/>
                    <div className={styles.bodyContent}>
                        <div className={styles.mainContent}>
                            <WrapperComponent {...passThroughProps}/>
                        </div>
                        <div className={styles.userSider}>
                            <UserSider/>
                        </div>

                    </div>
                    <Footer/>
                </div>
            );
        }
    }
}
