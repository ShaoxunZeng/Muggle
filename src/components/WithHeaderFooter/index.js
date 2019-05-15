import React, { Component } from "react";
import styles from './index.module.less';
import Header from "../Header";
import Footer from "../Footer";

export default function WithHeaderFooter (WrappedComponent) {
    return class extends Component {
        render() {
            const { ...passThroughProps } = this.props;
            return (
                <div className={styles.wholeBody}>
                    <Header/>
                    <div className={styles.bodyContent}>
                        <WrappedComponent {...passThroughProps} />
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}
