/**
 * @file audio标签控制
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/7/3
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React, { Component } from 'react';

class Audio extends Component {

    constructor(props) {
        super(props);
        this.onProgress = props.onProgress;
        this.progressTimer = 0;
    }

    handleProgress() {
        let a = this.refs['audioNode'];
        let currentTime = a.currentTime;
        let totalTime = a.duration;
        this.onProgress(currentTime, totalTime);
    }

    play() {
        this.refs['audioNode'].play();
    }

    pause() {
        this.refs['audioNode'].pause();
    }

    setTime(t) {
        this.refs['audioNode'].currentTime = t;
        this.handleProgress();
    }

    startTimer() {
        if (this.progressTimer) return;
        this.progressTimer = setInterval(() => {
            this.handleProgress();
        }, 100);
    }

    stopTimer() {
        clearInterval(this.progressTimer);
        this.progressTimer = 0;
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.startTime !== this.props.startTime) {
            this.setTime(nextProps.startTime);
        }
        if (nextProps.status !== this.props.status) {
            let s = nextProps.status;
            switch (s) {
                case 'play':
                    this.play();
                    break;
                case 'pause':
                    this.pause();
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return (
            <div className="audio">
                <audio ref="audioNode" src={this.props.src} />
            </div>
        );
    }
}

export default Audio;