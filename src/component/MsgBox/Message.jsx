import React, {
  Component
} from 'react';
class Message extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    var self = e.nativeEvent.target;
    var sign = self.getAttribute('data-val');
    const {
        closeCallBack,
    } = this.props;

    closeCallBack(false, sign);
  }
  
  render() {
    const {
        msg,
      schoolList,
      schoolList2

    } = this.props;

    let imgURL = 'http://saas.zeego.cn/UploadImg/Person/';

    let navigatorURL = '';

    if (msg.ScenicName === '野樱花和映山红') {
      navigatorURL = `https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=富阳区万市镇何务村&c=179&searchFlag=more_cate&nb_x=119.473533&nb_y=30.108663&center_rank=1&center_name=贤明山公园附近/vt=map`;
    }

    if (msg.ScenicName === '新登镇幼儿园') {
      navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E6%96%B0%E7%99%BB%E9%95%87%E5%B9%BC%E5%84%BF%E5%9B%AD&c=179&searchFlag=more_cate&nb_x=119.740481&nb_y=%20%2029.97991&center_rank=1&center_name=%E6%96%B0%E7%99%BB%E9%95%87%E5%B9%BC%E5%84%BF%E5%9B%AD&uid=6ed3083a81f129b42a3a9f97&industry=education&qid=10404472207980643975/showall=1&pos=1&da_ref=mapclk&da_qrtp=36&da_log=sampid%3A0_eno%3A6_adnum%3A0_sid%3A4223989132499102_from%3Awebappmap_exptype%3Aurl_query%3A%E6%96%B0%E7%99%BB%E9%95%87%E5%B9%BC%E5%84%BF%E5%9B%AD_adids%3A_killnum%3A0_userids%3A&da_adquery=%E6%96%B0%E7%99%BB%E9%95%87%E5%B9%BC%E5%84%BF%E5%9B%AD&da_adtitle=%E6%96%B0%E7%99%BB%E9%95%87%E4%B8%AD%E5%BF%83%E5%B9%BC%E5%84%BF%E5%9B%AD&da_adindus=%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD%3B%E5%B9%BC%E5%84%BF%E5%9B%AD&detail_from=list&vt=map`;
    }

    else if (msg.ScenicName === '院士故里（官塘村）') {
      navigatorURL = `https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%AF%8C%E9%98%B3%E5%8C%BA%E6%96%B0%E7%99%BB%E9%95%87%E5%AE%98%E5%A1%98%E6%9D%91%E6%9D%91%E6%B0%91%E5%A7%94%E5%91%98%E4%BC%9A&c=179&searchFlag=more_cate&nb_x=119.289362&nb_y=29.2866488&center_rank=1&center_name=%E5%AF%8C%E9%98%B3%E5%8C%BA%E6%96%B0%E7%99%BB%E9%95%87%E5%AE%98%E5%A1%98%E6%9D%91%E6%9D%91%E6%B0%91%E5%A7%94%E5%91%98%E4%BC%9A/vt=map`;
    }

    else if (msg.ScenicName === '花迹·桃夭山庄（民宿）') {
      navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E5%8D%8A%E5%B1%B1%E6%9D%91&c=179&searchFlag=more_cate&nb_x=120.182462&nb_y=%20%2030.014783&center_rank=1&center_name=%E5%8D%8A%E5%B1%B1%E6%9D%91&uid=0934bfaf8803c24579dbd2d1&industry=life&qid=4913304886165355203/showall=1&pos=2&da_ref=mapclk&da_qrtp=11&da_log=sampid%3A0_eno%3A6_adnum%3A0_sid%3A245234180254981_from%3Awebappmap_exptype%3Aurl_query%3A%E5%8D%8A%E5%B1%B1%E6%9D%91_adids%3A_killnum%3A0_userids%3A&da_adquery=%E5%8D%8A%E5%B1%B1%E6%9D%91&da_adtitle=%E5%8D%8A%E5%B1%B1%E6%9D%91&da_adindus=%E8%A1%8C%E6%94%BF%E5%9C%B0%E6%A0%87%3B%E6%9D%91%E5%BA%84&detail_from=list&vt=map`;
    }

    else if (msg.ScenicName === '圣园碑林') {
      navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6%E9%99%84%E8%BF%91&c=179&searchFlag=more_cate&nb_x=119.743648&nb_y=29.977028&center_rank=1&center_name=%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6%E9%99%84%E8%BF%91&uid=d82d6697a75997d8d518b716&industry=education&qid=1644929160096392703/showall=1&pos=0&da_ref=mapclk&da_qrtp=36&da_log=sampid%3A0_eno%3A6_adnum%3A0_sid%3A245658749354539_from%3Awebappmap_exptype%3Aurl_query%3A%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6_adids%3A_killnum%3A0_userids%3A&da_adquery=%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6&da_adtitle=%E5%AF%8C%E9%98%B3%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6&da_adindus=%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD%3B%E4%B8%AD%E5%AD%A6&detail_from=list&vt=map`;
    }

    else if (msg.ScenicName === '徐玉兰故里') {
      navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E5%A1%94%E5%B1%B1%E6%9D%91&c=179&searchFlag=more_cate&nb_x=119.729771&nb_y=29.978841&center_rank=1&center_name=%E5%A1%94%E5%B1%B1%E6%9D%91&uid=e116be547318f77ac91b95f3&industry=life&qid=5378378938551733454/showall=1&pos=1&da_ref=mapclk&da_qrtp=11&da_log=sampid%3A0_eno%3A6_adnum%3A0_sid%3A239515510449985_from%3Awebappmap_exptype%3Aurl_query%3A%E5%A1%94%E5%B1%B1%E6%9D%91_adids%3A_killnum%3A0_userids%3A&da_adquery=%E5%A1%94%E5%B1%B1%E6%9D%91&da_adtitle=%E5%A1%94%E5%B1%B1%E6%9D%91&da_adindus=%E8%A1%8C%E6%94%BF%E5%9C%B0%E6%A0%87%3B%E6%9D%91%E5%BA%84&detail_from=list&vt=map`;
    }
    else if (msg.ScenicName == '古香居（民宿）') {
      navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E5%8F%8C%E8%81%94%E6%9D%91&c=179&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&wd2=%E6%9D%AD%E5%B7%9E%E5%B8%82%E5%AF%8C%E9%98%B3%E5%B8%82&sug_forward=108b1cea8a582dad3586f4f3&src=1&nb_x=13357241.3&nb_y=3500416.34&center_rank=1&uid=108b1cea8a582dad3586f4f3&industry=life&qid=2776843404188988526/showall=1&pos=0&da_ref=listclk&da_qrtp=11&da_log=sampid%3A3_eno%3A206_adnum%3A0_sid%3A4221081975848971_from%3Awebappmap_exptype%3Aurl_query%3A%E5%8F%8C%E8%81%94%E6%9D%91_adids%3A_killnum%3A0_userids%3A&da_adquery=%E5%8F%8C%E8%81%94%E6%9D%91&da_adtitle=%E5%8F%8C%E8%81%94%E6%9D%91&da_adindus=%E8%A1%8C%E6%94%BF%E5%9C%B0%E6%A0%87%3B%E6%9D%91%E5%BA%84&detail_from=list%26pos%3D0%26ad_page_logs%3D%26semStatType%3Dlist&vt=map/?fromhash=1`
    }

    else if (msg.ScenicName === '罗隐碑林' || msg.ScenicName === '联魁塔') {
      navigatorURL = `https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=贤明山公园&c=179&searchFlag=more_cate&nb_x=119.738586&nb_y=  29.966398&center_rank=1&center_name=贤明山公园附近/vt=map`;
    }

    else {
      navigatorURL = `https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=${msg.ScenicArea}&c=179&searchFlag=more_cate&nb_x=${msg.LatY}&nb_y= ${msg.LongX}&center_rank=1&center_name=${msg.ScenicName}/vt=map`;
    }

    if (msg.ScenicName === '平山村') {
      const msgItem = schoolList.map((item, index) => {
        item = item.data;
        navigatorURL = `https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=${item.ScenicArea}&c=179&searchFlag=more_cate&nb_x=${item.LatY}&nb_y= ${item.LongX}&center_rank=1&center_name=${item.ScenicName}/vt=map`;
       /*  if (item.ScenicName === '平山村') {
          navigatorURL = `https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6&c=179&searchFlag=more_cate&nb_x=119.743648&nb_y=%20%2029.977028&center_rank=1&center_name=%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6&uid=d82d6697a75997d8d518b716&industry=education&qid=6993478897166766157/showall=1&pos=0&da_ref=mapclk&da_qrtp=36&da_log=sampid%3A0_eno%3A6_adnum%3A0_sid%3A4224107836110051_from%3Awebappmap_exptype%3Aurl_query%3A%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6_adids%3A_killnum%3A0_userids%3A&da_adquery=%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6&da_adtitle=%E5%AF%8C%E9%98%B3%E6%96%B0%E7%99%BB%E4%B8%AD%E5%AD%A6&da_adindus=%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD%3B%E4%B8%AD%E5%AD%A6&detail_from=list&vt=map`;
        }
 */
        return (
          <div className="poibox" key={index} style={{'padding': '5px'}}>
            <img className="logo" src={imgURL + item.ScenicPic} alt={msg.ScenicName} />
            <section className="placetitle">
              <div className="title">
                <span className="poiname">{item.ScenicName}</span>
              </div>
              <p className="desc">
                {item.ScenicBrief}
              </p>
              <p style={{ 'overflow': 'hidden', 'marginTop': 5 }}>
                <a className="navigator-btn" href={navigatorURL}>导&nbsp;&nbsp;航</a>
              </p>
            </section>
            <hr className={index === schoolList.length-1 ? 'hidden' : ''}/> 
          </div>
        );
      });
      return (
          <div className="poibox" style={{ height: document.body.clientHeight, overflow: 'scroll' }}>
            <p style={{ 'overflow': 'hidden', 'marginTop': 5 }}>
              <a href="#" className="close icon" data-val="list" onTouchStart={this.handleClick}></a>
            </p>
            <div className="school" id="schoolList">
                {msgItem}
            </div>
          </div>
      );
    }
    return (
      <div>
        <div className="poibox">
          <img className="logo" src={imgURL + msg.ScenicPic} alt={msg.ScenicName} />
          <section className="placetitle">
            <div className="title">
              <span className="poiname">{msg.ScenicName}</span>
              <a href="#" className="close icon" onTouchStart={this.handleClick}></a>
            </div>
            <p className="desc">
              {msg.ScenicBrief}
            </p>
            <p style={{ 'overflow': 'hidden', 'marginTop': 5 }}>
              <a href={'tel:' + msg.ScenicTel}>{msg.ScenicTel}</a>&nbsp;&nbsp;
                  <a href={'tel:' + msg.ScenicTelTwo}>{msg.ScenicTelTwo}</a>
              <a className="navigator-btn" href={navigatorURL}>导&nbsp;&nbsp;航</a>
            </p>
          </section>
        </div>
      </div>
    );
  }
  componentDidMount() {
   
  }
}
export default Message;
