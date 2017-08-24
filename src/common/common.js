/**
 * @file 公共的方法
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/7/8
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

export const second2time = (seconds) => {
    if (!seconds) {
        return '00:00';
    }
    let m = Math.floor(seconds / 60);
    let s = Math.floor(seconds % 60);
    let res = '';
    if (m < 10) {
        res += '0';
    }
    res += (m + '');
    res += ':';
    if (s < 10) {
        res += '0';
    }
    res += (s + '');
    return res;
};

export const setCookie = (cName, value, expireDays) => {
    let exDate = new Date();
    exDate.setDate(exDate.getDate() + expireDays);
    document.cookie = cName + '=' + encodeURIComponent(value)
        + (expireDays ? '' : ';expires='+exDate.toUTCString());
};

export const getCookie = (cName) => {
    if (document.cookie.length > 0) {
        let cStart = document.cookie.indexOf(cName + "=");
        if (cStart >= 0) {
            cStart=cStart + cName.length + 1;
            let cEnd = document.cookie.indexOf(";", cStart);
            if (cEnd < 0) {
                cEnd = document.cookie.length;
            }
            return decodeURIComponent(document.cookie.substring(cStart, cEnd));
        }
    }
    return "";
};

let pxRemCache = 0;
const getPxRemRate = () => {
    if (!pxRemCache) {
        let htmlDom = document.getElementsByTagName('html')[0];
        pxRemCache = parseInt(window.getComputedStyle(htmlDom).getPropertyValue('font-size'), 10);
    }
    return pxRemCache;
};

export const px2rem = (px) => {
    return px / getPxRemRate();
};

export const rem2px = (rem) => {
    return rem * getPxRemRate();
};
