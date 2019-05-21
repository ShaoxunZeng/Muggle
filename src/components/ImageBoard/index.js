import React, {Component} from "react";
import styles from './index.module.less';
import {Carousel} from 'element-react';
import 'element-theme-default';


class ImageBoard extends Component {
    posterUrls = Array(7).fill("https://s2.ax1x.com/2019/04/01/AyCRGq.png");
    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.image}>
                    <Carousel interval="3000" type="card" height="400px">
                        {
                            this.posterUrls.map((url, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img src={url} />
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>

                </div>
            </div>
        )
    }
}

export default ImageBoard;
