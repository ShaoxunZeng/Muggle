import React, {Component} from "react";
import styles from './index.module.less';
import {Carousel} from 'element-react';
import 'element-theme-default';


class ImageBoard extends Component {
    constructor(props){
        super(props)
    }

    // todo()  Warning: Each child in a list should have a unique "key" prop.
    render() {
        const {posterUrls}=this.props;
        return (
            <div className={styles.whole}>
                <div className={styles.image}>
                    <Carousel interval="3000" type="card" height="400px">
                        {
                            posterUrls.map((url, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img key={'pic'+index} src={url} />
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
