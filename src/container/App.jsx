import React, {
    Component
} from 'react';
import IScroll from 'iscroll/build/iscroll-zoom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MsgBox from '../component/MsgBox';
import ajax from '../util/ajax';

import renderData from '../../mock/data';
import land from '../imgs/land@2x.png';
import star from '../imgs/star.png';

import 'normalize.css';
import '../styles/reset.css';

const defaultProps = {
    land: land,
};
const propTypes = {
    land: React.PropTypes.string,
}

const REQUESTURL = '/Interface/FuYMap/ScenicListService.ashx?pagetype=info&id=';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            viewList: [],
            isShow: false,
            currMsg: {},
            schoolList: [],
            sign:''
        }

        // this.loadPage = this.loadPage.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }
    loadPage = () => {
        this.setState({
            list: renderData.list,
            viewList: renderData.viewList
        });
    }
    handleClick = (index, getList) => {
        // console.log(getList);
        const that = this;
        let isLogo = false;
        // console.log(index);

        if (index !== 100) {
            isLogo = true;
        }
        ajax.getRequest({
            url: REQUESTURL + index,
            method: 'get'
        }, function (data) {
            data = JSON.parse(data);
            if (data.status === 1) {
                that.setState({
                    isShow: isLogo,
                    currMsg: data.data
                });
            }
        }, function (error) {
            // console.log(error);
        });
    }
    handleClose(isShow, sign) {
        this.setState({
            isShow: isShow,
            sign: sign
        });
    }
    getData = () => {
        var ary = [];
        var that = this;
        ajax.getRequest({
            url: REQUESTURL + 55,
            method: 'get'
        }, function (data) {
            data = JSON.parse(data);
            ary.unshift(data);
        }, function (error) {
            // console.log(error);
        });


        for (var i = 56; i < 59; i++) {
            ajax.getRequest({
                url: REQUESTURL + i,
                method: 'get'
            }, function (data) {
                data = JSON.parse(data);
                ary.push(data);
                that.setState({
                    schoolList: ary
                });
            }, function (error) {
                // console.log(error);
            });
        }

    }
    render() {
        let { list, isShow, viewList, sign } = this.state;
        const { land } = this.props;

        console.log(sign);

        const landPoint = list.map((item, index) => {
            const posStyle = {
                'left': `${item.coordX}`,
                'top': `${item.coordY}`
            }
            return (
                <a className="land" style={posStyle} key={index} data-index={item.id} onTouchTap={this.handleClick.bind(this, item.id, 'land')} >
                    <img className="logo" src={item.id == 25 ? star : land} alt={item.name} />
                    <span style={{ 'display': 'none' }}>{item.name}</span>
                </a>
            )
        }, this);

        const viewPoint = viewList.map((item, index) => {
            const viewStyle = {
                'left': `${item.coordX}`,
                'top': `${item.coordY}`
            }
            return (
                <a className={index === 0 ? "view-spe" : "view"} style={viewStyle} key={index} data-index={item.id} onTouchTap={this.handleClick.bind(this, item.id, 'view')} >
                    <span style={{ 'display': 'none' }}>{item.name}</span>
                </a>
            );
        }, this);

        return (
            <div>
                <div className="map-container wrapper" id="wrapper">
                    <div className={isShow === true ? "land-map map-move" : "land-map"}>
                        {landPoint}
                        {viewPoint}
                    </div>
                </div>
                <MsgBox {...this.state} closeCallBack={this.handleClose} ref={(card) => { this.cardBox = card }} />
                <p className="tips">点击红色标记,跟着导航游万市。</p>
            </div>
        )
    }
    componentDidMount() {
        this.loadPage();
        this.getData();

        new IScroll('#wrapper', {
            zoom: true,
            scrollX: true,
            scrollY: true,
            mouseWheel: true,
            wheelAction: 'zoom',
            click: true,
            zoomStart: 1,
            disableMouse: true,
            disablePointer: true
        });

        document.addEventListener('touchmove', function (e) {
            // e.preventDefault();
        }, false);

    }
}
App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
