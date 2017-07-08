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
    }

    handleScroll () {
        let t = this.refs['outerNode'].scrollTop;
        this.setState({
            scrollTop: t
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
        let px2rem = parseInt(htmlDom.style.fontSize);
        let remHeight = height / px2rem;
        return Math.ceil(remHeight / this.ITEM_HEIGHT) + 2;
    }

    render () {
        let firstIndex = this.calcFirstIndex();
        let itemCount = this.calcItemCount();
        let itemHeight = this.ITEM_HEIGHT;

        let songList = this.props['songList'];
        let renderSongList = songList.slice(firstIndex, itemCount);

        let listHeight = songList.length * this.ITEM_HEIGHT;

        return (
            <div className="SongListOuter">
                <div className="SongListInner" style={'height:' + listHeight + 'rem;'}>
                    <ul>
                        {
                            renderSongList.map((info, index) => (
                                <li className="songItem" style={'top:' + ((firstIndex + index) * itemHeight) + 'rem;'}>
                                    <ListItem songInfo={info} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default SongList;