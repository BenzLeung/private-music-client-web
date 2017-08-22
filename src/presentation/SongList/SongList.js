/**
 * @file 歌曲列表
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/5/24
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React, {Component} from 'react';
import './SongList.css';
import ListItem from './ListItem/ListItem';

class SongList extends Component {
    constructor (props) {
        super(props);
        this.ITEM_HEIGHT = 6;
        this.state = {
            scrollTop: 0
        };
        this.onSetSong = props.onSetSong;
        this.refreshList = props.refreshList;
    }

    componentDidMount() {
        this.refreshList();
    }

    setOuterNodeRef(node) {
        this.outerNode = this.outerNode || null;
        if (node && this.outerNode !== node) {
            node.addEventListener('scroll', this.handleScroll2.bind(this), false);
            this.outerNode = node;
        }
    }

    handleScroll2 () {
        if (!this.scrollTimeout) {
            this.scrollTimeout = setTimeout(() => {
                this.handleScroll();
                this.scrollTimeout = 0;
            }, 100);
        }
    }

    handleScroll () {
        let t = this.outerNode.scrollTop;
        let htmlDom = document.getElementsByTagName('html')[0];
        let px2rem = parseInt(window.getComputedStyle(htmlDom).getPropertyValue('font-size'), 10);
        let remTop = t / px2rem;
        this.setState({
            scrollTop: remTop
        })
    }

    calcFirstIndex () {
        let top = this.state.scrollTop - this.ITEM_HEIGHT * 2;
        if (top <= 0) {
            return 0;
        }
        return Math.floor(top / this.ITEM_HEIGHT);
    }

    calcItemCount () {
        let height = document.body.clientHeight;
        let htmlDom = document.getElementsByTagName('html')[0];
        let px2rem = parseInt(window.getComputedStyle(htmlDom).getPropertyValue('font-size'), 10);
        let remHeight = height / px2rem;

        /*console.log({
            height,
            htmlFontSize: htmlDom.style.fontSize,
            px2rem,
            remHeight,
            res: remHeight / this.ITEM_HEIGHT
        });*/

        return Math.ceil(remHeight / this.ITEM_HEIGHT) + 2;
    }

    render () {
        let firstIndex = this.calcFirstIndex();
        let itemCount = this.calcItemCount();
        let itemHeight = this.ITEM_HEIGHT;

        let songList = this.props['songList'];
        let renderSongList = songList.slice(firstIndex, itemCount);

        let listHeight = songList.length * this.ITEM_HEIGHT;

        console.log({
            firstIndex,
            itemCount,
            itemHeight,
            songList,
            renderSongList,
            listHeight
        });

        return (
            <div className="SongListOuter" ref={(o) => {this.setOuterNodeRef(o);}}>
                <div className="SongListInner" style={{'height' : listHeight + 'rem'}}>
                    <ul>
                        {
                            (() => {
                                let liArray = [];
                                let info;
                                let lastIndex = Math.min(firstIndex + itemCount, songList.length);
                                for (let i = firstIndex; i < lastIndex; i ++) {
                                    info = songList[i];
                                    if (info) {
                                        liArray[i % itemCount] = (
                                            <li key={i % itemCount} className="songItem" style={{'top' : (i * itemHeight) + 'rem', 'height': itemHeight + 'rem'}}>
                                                <ListItem songInfo={info} />
                                            </li>
                                        );
                                    }
                                }
                                return liArray;
                            })()
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default SongList;