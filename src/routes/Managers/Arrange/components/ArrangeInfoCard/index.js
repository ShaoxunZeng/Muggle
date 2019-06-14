import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {DatePicker, Input, Select, TimePicker} from "antd";
import SeatsPicker from "../../../../../components/SeatsPicker";
import MovieInfoCard from "../MovieInfoCard";
import Button from "../../../../../components/Button";
import {deleteScene} from "../../../../../services/apiArrange";

class ArrangeInfoCard extends PureComponent {
    delScene = (sceneId) => {
        console.log(sceneId);
        deleteScene(sceneId).then(res => {
            alert('删除排片成功！');
            console.log(res)
        }).catch(res => {
            alert('该场次已有观众购买，无法删除');
            console.log(res)
        })
    };

    render() {
        const {arrangeInfo} = this.props;
        return (
            <div className={styles.whole}>
                <div className={styles.info}>
                    <MovieInfoCard movieName={arrangeInfo.movieName}
                                   posterUrl={arrangeInfo.posterUrl}
                                   length={arrangeInfo.length}/>
                </div>

                <div className={styles['inputs-container']}>
                    <div className={styles.container}>
                        <div className={styles.text}>影厅</div>
                        <Select
                            showSearch
                            style={{width: 200}}
                            placeholder="Select a hall"
                            optionFilterProp="children"
                            className={styles.input}
                        >
                            <Select.Option value="jack">1</Select.Option>
                            <Select.Option value="lucy">2</Select.Option>
                            <Select.Option value="tom">3</Select.Option>
                        </Select>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.text}>日期</div>
                        <DatePicker className={styles.input}/>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.text}>时间</div>
                        <TimePicker onChange={() => {
                        }} className={styles.input}/>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.text}>票价</div>
                        <Input className={styles.input} placeholder="price"/>
                    </div>
                    <Button type="yellow">确认修改</Button>
                    <Button type="gray"
                            onClick={() => this.delScene(arrangeInfo.sceneId)}
                    >删除排片</Button>
                </div>

                <div className={styles['screen-picker']}>
                    <div className={styles.screen}>
                        <div className={styles.line} style={{marginRight: 25}}/>
                        Screen
                        <div className={styles.line} style={{marginLeft: 25}}/>
                    </div>
                    <div className={styles.picker}>
                        <SeatsPicker seats={arrangeInfo.seats} onSelected={() => {
                        }}/>
                    </div>
                </div>
            </div>
        )
    };
}

export default ArrangeInfoCard;
