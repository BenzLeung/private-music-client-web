/**
 * @file 设置服务器地址的对话框
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/8/24
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React, { Component } from 'react';
import {setCookie, getCookie, filterUrl} from "../../common/common";
import './SetServer.css';

class SetServer extends Component {

    submitUrl() {
        let url = this.urlInput.value;
        url = filterUrl(url);
        this.props['onSubmitUrl'](url);
        setCookie('serverUrl', url, 365);
    }

    componentDidMount() {
        if (!this.props['serverUrl']) {
            this.urlInput.value = getCookie('serverUrl');
        }
    }

    render() {
        return (
            <div className="SetServer" style={{display: (this.props['settingServer'] ? 'block' : 'none')}}>
                <div className="mask" />
                <div className="dialog">
                    <div className="text">你的私人音乐服务器地址：</div>
                    <div className="urlBox">
                        <input ref={(me) => {this.urlInput = me;}} type="text" className="urlInput" />
                    </div>
                    <div className="submitButton">
                        <button className="urlOK" onClick={this.submitUrl.bind(this)}>连接</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SetServer;