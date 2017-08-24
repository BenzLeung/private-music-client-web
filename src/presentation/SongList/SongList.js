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
import {px2rem, rem2px} from "../../common/common";

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
        //this.refreshList();
    }

    /*setOuterNodeRef(node) {
        this.outerNode = this.outerNode || null;
        if (node && this.outerNode !== node) {
            node.addEventListener('scroll', this.handleScroll2.bind(this), false);
            this.outerNode = node;
        }
    }*/

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
        let remTop = px2rem(t);
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
        let remHeight = px2rem(height);

        /*console.log({
            height,
            htmlFontSize: htmlDom.style.fontSize,
            px2rem,
            remHeight,
            res: remHeight / this.ITEM_HEIGHT
        });*/

        return Math.ceil(remHeight / this.ITEM_HEIGHT) + 2;
    }

    componentWillReceiveProps(nextProps) {
        if (!this.outerNode) {return;}
        let firstIndex = this.calcFirstIndex() + 2;
        let itemCount = this.calcItemCount();
        let lastIndex = firstIndex + itemCount - 5;
        let oldCurIndex = this.props.currentIndex;
        let newCurIndex = nextProps.currentIndex;

        if (oldCurIndex !== newCurIndex
            && (newCurIndex <= firstIndex || lastIndex <= newCurIndex)) {
            let targetFirstIndex = newCurIndex - Math.floor(itemCount / 2 - 3);
            if (targetFirstIndex <= 0) {
                this.outerNode.scrollTop = 0;
                return;
            }
            let targetRemScrollTop = targetFirstIndex * this.ITEM_HEIGHT;
            this.outerNode.scrollTop = rem2px(targetRemScrollTop);
        }
    }

    render () {
        let firstIndex = this.calcFirstIndex();
        let itemCount = this.calcItemCount();
        let itemHeight = this.ITEM_HEIGHT;

        let songList = this.props['songList'];

        let listHeight = songList.length * this.ITEM_HEIGHT;

        /*console.log({
            firstIndex,
            itemCount,
            itemHeight,
            songList,
            listHeight
        });*/

        return (
            <div className="SongListOuter" ref={(o) => {this.outerNode = o;}} onScroll={this.handleScroll2.bind(this)}>
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
                                            <li
                                                key={i % itemCount}
                                                className={'songItem ' + (i === this.props.currentIndex ? 'songItemCurrent ' : '') + (i % 2 ? 'songItemOdd ' : 'songItemEven ')}
                                                style={{'top' : (i * itemHeight) + 'rem', 'height': itemHeight + 'rem'}}
                                                >
                                                    <ListItem songInfo={info} onSelect={() => {this.onSetSong(i)}} />
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