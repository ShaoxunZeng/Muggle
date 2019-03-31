import React from "react";
import Header from "../components/Header";
import styles from "./DefaultLayout.module.less";
import {Route} from "react-router-dom";

export const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route
            component={function ({...props}) {
                return (
                    <div className={styles.wholeBody}>
                        <Header/>
                        <div className={styles.BodyContent}>
                            <Component {...props} />
                        </div>
                    </div>
                )
            }}
            {...rest}
        />
    );
};