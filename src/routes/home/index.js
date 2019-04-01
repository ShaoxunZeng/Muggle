import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import ImageBoard from "../../components/ImageBoard";

class Index extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          <div className={styles["image-board"]}>
            <ImageBoard />
          </div>
        </div>
    )
  };
}

export default Index;