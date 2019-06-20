import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import ImageBoard from "../../../components/ImageBoard";
import RecentMoives from "../../../components/RecentMovies";
import Button from "../../../components/Button";
import WithHeaderFooter from "../../../components/WithHeaderFooter";

class PrivateCinema extends PureComponent {
    componentWillMount() {
        alert('该功能暂未上线！');
        setTimeout(this.props.history.push('/allmovies'), 3000)
    }

    render() {
        return (
            <div className={styles.whole}/>
        )
    };
}

export default WithHeaderFooter(PrivateCinema);
