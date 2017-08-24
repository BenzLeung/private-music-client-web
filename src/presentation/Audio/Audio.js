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
        this.onEnded = props.onEnded;
        this.onStateChanged = props.onStateChanged;
        this.progressTimer = 0;
    }

    handleProgress() {
        let a = this.audioNode;
        let currentTime = a.currentTime;
        let totalTime = a.duration || 0;
        this.onProgress(currentTime, totalTime);
    }

    handleEnded() {
        this.onEnded();
        console.log('Audio: ended');
    }

    handleStateChanged(newState) {
        this.onStateChanged(newState);
    }

    handleStatePlaying() {
        this.handleStateChanged('play');
        console.log('Audio: play');
    }
    handleStatePaused() {
        this.handleStateChanged('pause');
        console.log('Audio: pause');
    }


    play() {
        this.audioNode.play();
    }

    pause() {
        this.audioNode.pause();
    }

    setTime(t) {
        this.audioNode.currentTime = t;
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

    /*componentDidMount() {
        this.startTimer();
    }*/

    componentDidUpdate(prevProps, prevState) {
        if (this.props.startTime !== prevProps.startTime) {
            this.setTime(this.props.startTime);
        }
        if (this.props.status !== prevProps.status) {
            let s = this.props.status;
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
        if (this.props.src !== prevProps.src && this.props.status === 'play') {
            this.play();
        }
    }

    render() {
        return (
            <div className="audio">
                <audio
                    ref={(a) => {this.audioNode = a;}}
                    src={this.props.src}
                    onEnded={this.handleEnded.bind(this)}
                    onPlaying={this.handleStatePlaying.bind(this)}
                    onPause={this.handleStatePaused.bind(this)}
                    onTimeUpdate={this.handleProgress.bind(this)} />
            </div>
        );
    }
}

export default Audio;