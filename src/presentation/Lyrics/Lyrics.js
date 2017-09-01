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
    }

    render () {
        return (
            <div className="Lyrics">
                {this.props.content}
            </div>
        );
    }
}

export default Lyrics;