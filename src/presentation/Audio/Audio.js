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

    setAudioNode(node) {
        this.audioNode = this.audioNode || null;
        if (node && node !== this.audioNode) {
            node.addEventListener('ended', this.handleEnded.bind(this), false);
            node.addEventListener('playing', this.handleStatePlaying.bind(this), false);
            node.addEventListener('pause', this.handleStatePaused.bind(this), false);
            node.addEventListener('timeupdate', this.handleProgress.bind(this), false);
            this.audioNode = node;
        }
    }

    handleProgress() {
        let a = this.audioNode;
        let currentTime = a.currentTime;
        let totalTime = a.duration;
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
                <audio ref={(a) => {this.setAudioNode(a);}} src={this.props.src} />
            </div>
        );
    }
}

export default Audio;