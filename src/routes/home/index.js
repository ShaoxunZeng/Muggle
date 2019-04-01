import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import ImageBoard from "../../components/ImageBoard";
import RecentMoives from "../../components/RecentMovies";

class Index extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          <div className={styles["image-board"]}>
            <ImageBoard />
          </div>
          <div className={styles["recent-movies"]}>
            <RecentMoives />
          </div>
        </div>
    )
  };
}

export default Index;