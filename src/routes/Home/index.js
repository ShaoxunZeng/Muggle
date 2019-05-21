import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import ImageBoard from "../../components/ImageBoard";
import RecentMoives from "../../components/RecentMovies";
import Button from "../../components/Button";
import WithHeaderFooter from "../../components/WithHeaderFooter";


class Home extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          <div className={styles["image-board"]}>
            <ImageBoard />
          </div>
          <div className={styles["recent-movies"]}>
            <RecentMoives />
          </div>
          <Button type="gray"> 立即购买 </Button>
        </div>
    )
  };
}

export default WithHeaderFooter(Home);
