import React, {
  Component
} from 'react';
import './index.css';
import Message from './Message';
import classnames from 'classnames';

class MsgBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msgObj: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    console.info(nextProps);
    this.setState({
      msgObj: nextProps.currMsg
    });
  }

  render() {
    let {
      msgObj,
    } = this.state;

    const {
      isShow,
      closeCallBack,
      schoolList,
      sign
    } = this.props;

    const documentHeight = document.body.clientHeight + 'px';

    const signClass = {
      'height': `${documentHeight}`,
      'transform': 'translateY('+ `${documentHeight}` + ')',
      'transition': 'all 500ms ease-out'
    };

    const cx = classnames({
      'msg-box': true,
      'card-move-in': isShow,
      'card-move-out': !isShow && !sign
    })

    return (
      <div className={cx} style={!isShow && sign ? signClass : {}}>
        <Message msg={msgObj} schoolList={schoolList} closeCallBack={closeCallBack} />
      </div>
    );
  }
}
export default MsgBox;
