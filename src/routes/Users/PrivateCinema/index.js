import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import ImageBoard from "../../../components/ImageBoard";
import RecentMoives from "../../../components/RecentMovies";
import Button from "../../../components/Button";
import WithHeaderFooter from "../../../components/WithHeaderFooter";

class PrivateCinema extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Private Cinema
        </div>
    )
  };
}

export default WithHeaderFooter(PrivateCinema);
