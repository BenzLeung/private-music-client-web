/**
 * @file 播放进度条
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/7/3
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React, { Component } from 'react';
import { second2time } from '../../common/common';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './ProgressSlider.css';


class ProgressSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChanging: false,
            currentTime: 0
        };
        this.onAfterDragged = props.onAfterDragged;
    }

    handleBeforeChange() {
        this.setState({
            isChanging: true
        });
    }

    handleSliding(newTime) {
        this.setState({
            currentTime: newTime
        });
    }

    handleAfterChange(newTime) {
        if (typeof this.onAfterDragged === 'function') {
            this.onAfterDragged(newTime);
        }

        this.setState({
            isChanging: false,
            currentTime: newTime
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!this.state.isChanging && nextProps.currentTime !== this.props.currentTime) {
            this.setState({
                currentTime: nextProps.currentTime
            });
        }
    }

    render() {
        let div;
        if (this.state.isChanging) {
            div = (
                <div className="ProgressSliderOuter">
                    <div className="currentTime">{second2time(this.state.currentTime)}</div>
                    <div className="ProgressSlider">
                        <Slider
                            min={0}
                            max={this.props.totalTime}
                            onBeforeChange={this.handleBeforeChange.bind(this)}
                            onChange={this.handleSliding.bind(this)}
                            onAfterChange={this.handleAfterChange.bind(this)}
                        />
                    </div>
                    <div className="totalTime">{second2time(this.props.totalTime)}</div>
                </div>
            );
        } else {
            div = (
                <div className="ProgressSliderOuter">
                    <div className="currentTime">{second2time(this.state.currentTime)}</div>
                    <div className="ProgressSlider">
                        <Slider
                            min={0}
                            max={this.props.totalTime}
                            onBeforeChange={this.handleBeforeChange.bind(this)}
                            onAfterChange={this.handleAfterChange.bind(this)}
                            value={this.state.currentTime}
                        />
                    </div>
                    <div className="totalTime">{second2time(this.props.totalTime)}</div>
                </div>
            );
        }
        return div;
    }
}

export default ProgressSlider;