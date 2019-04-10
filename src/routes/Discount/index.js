import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import ImageBoard from "../../components/ImageBoard";
import RecentMoives from "../../components/RecentMovies";
import Button from "../../components/Button";

class Discount extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Discount
        </div>
    )
  };
}

export default Discount;