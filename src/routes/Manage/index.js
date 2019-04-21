import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import ImageBoard from "../../components/ImageBoard";
import RecentMoives from "../../components/RecentMovies";
import Button from "../../components/Button";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import WithSider from "../../components/WithSider";

class Manage extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Manage
          <div className={styles.block}/>
        </div>
    )
  };
}

export default WithSider(Manage);
