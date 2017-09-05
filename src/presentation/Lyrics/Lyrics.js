/**
 * @file 歌词展示
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/9/1
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React, {Component} from 'react';
import './Lyrics.css';

class Lyrics extends Component {
    constructor (props) {
        super(props);
        this.needRefresh = true;
        this.lyricsArray = [];
        this.curLine = -1;
    }

    static label2time (label) {
        if (!/^\[\d+:?\d+\.?\d+]$/.test(label)) {
            return -1;
        }
        let res = 0;
        let l = label.replace(/^\[|]$/g, '');
        let t = l.split(':');
        if (t.length === 2) {
            res += parseInt(t[0], 10) * 60;
            res += parseFloat(t[1]);
        } else {
            res += parseFloat(t[0]);
        }
        return res;
    }

    static lrc2array (lrc) {
        if (!lrc) {
            return [];
        }
        let lrcArray = [];

        let lrcLines = lrc.split(/[\n\r]+/g);
        for (let i = 0, len = lrcLines.length; i < len; i ++) {
            let str = lrcLines[i].trim();
            let labelArray = [];
            let labelReg = /^\[.+?]/;
            let label = str.match(labelReg);
            while (label) {
                labelArray.push(label[0]);
                str = str.replace(labelReg, '').trim();
                label = str.match(labelReg);
            }
            for (let j = 0, lenJ = labelArray.length; j < lenJ; j ++) {
                let time = Lyrics.label2time(labelArray[j]);
                if (time >= 0) {
                    lrcArray.push([time, str, i]);
                }
            }
        }

        lrcArray.sort(function (a, b) {
            if (a[0] === b[0]) {
                return (a[2] - b[2]);
            }
            return (a[0] - b[0]);
        });

        return lrcArray;
    }

    static makeLrcLi (lrcArray, curLine) {
        let res = [];
        for (let i = 0, len = lrcArray.length; i < len; i ++) {
            res.push(
                <li
                    className={'lrc' + (curLine === i ? ' lrcCurrent' : '')}
                    key={i}
                    ref={(l) => {}}>
                    {lrcArray[i][1]}
                </li>
            )
        }
        return res;
    }

    static getCurrentLineIndex (lrcArray, playTime) {
        let idx = 0;
        while (idx < lrcArray.length && playTime > lrcArray[idx][0]) {
            idx ++;
        }
        return (idx - 1);
    }

    animateScroll (targetScrollTop) {
        if (this.animateScrolling) {
            clearInterval(this.animateScrolling);
            this.animateScrolling = 0;
        }
        if (targetScrollTop === 0) {
            this.lyricsOuter.scrollTop = 0;
            return;
        }
        let curScrollTop = this.lyricsOuter.scrollTop;
        let remainFrame = 25;
        let movePerFrame = (targetScrollTop - curScrollTop) / 25;
        this.animateScrolling = setInterval(() => {
            if (remainFrame <= 0) {
                this.lyricsOuter.scrollTop = targetScrollTop;
                clearInterval(this.animateScrolling);
                this.animateScrolling = 0;
            }
            curScrollTop += movePerFrame;
            this.lyricsOuter.scrollTop = curScrollTop;
            remainFrame --;
        }, 500 / 25);
    }

    scrollToLine (line) {
        if (line < 0) {
            this.animateScroll(0);
            return;
        }
        let ul = this.lyricsOuter.childNodes[0];
        let curLi = ul.childNodes[line];
        let outerHeight = this.lyricsOuter.clientHeight;
        let liHeight = curLi.clientHeight;
        let liTop = curLi.offsetTop;
        let scrollTop = Math.floor(liTop - (outerHeight / 2) + (liHeight / 2));
        this.animateScroll(Math.max(scrollTop, 0));
    }

    updateCurLine (newLine) {
        if (this.curLine !== newLine) {
            this.scrollToLine(newLine);
            this.curLine = newLine;
        }
    }

    getLrcLi () {
        if (this.needRefresh && this.props.info && this.props.info['lrc']) {
            this.lyricsArray = Lyrics.lrc2array(this.props.info['lrc']);
            this.needRefresh = false;
        }
        let playTime = this.props.playTime;
        let curLine = Lyrics.getCurrentLineIndex(this.lyricsArray, playTime);
        this.updateCurLine(curLine);
        return Lyrics.makeLrcLi(this.lyricsArray, curLine);
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.info && nextProps.info && this.props.info['filename'] !== nextProps.info['filename']) {
            this.needRefresh = true;
        }
    }

    render () {
        return (
            <div className="Lyrics" ref={(x) => {this.lyricsOuter = x;}}>
                <ul>
                    {this.getLrcLi()}
                </ul>
            </div>
        );
    }
}

export default Lyrics;