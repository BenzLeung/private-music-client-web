/**
 * @file 设置服务器地址
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/8/24
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import { connect } from 'react-redux'
import {setServerUrl} from '../redux/actions'
import SetServer from '../presentation/SetServer/SetServer'

const mapStateToProps = (state) => {
    return {
        server: state.server,
        settingServer: state.settingServer
    };
};

const mapDispatchToProps = {
    onSubmitUrl: setServerUrl
};

const FilterSetServer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetServer);

export default FilterSetServer
