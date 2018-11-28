import React, {Component, Fragment} from 'react'
import { CommonsHeaderStyle, MessageContainer, Messageitem } from './styledComponent'
import { ActiveNavLink} from "@C/commons/router";

let messages = [
    { type: 'fa-cog', number: 11 , title: '系统消息', litterTitle: '平台,提醒和公告' },
    { type: 'fa-commenting', number: 2 , title: '社区消息', litterTitle: '社区的评论和回复' },
    { type: 'fa-gift', number: 5 , title: '活动消息', litterTitle: '参与活动的动态' }
]

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: 1,
            message: messages
        }
    }
    componentWillMount() {

    }
    render() {
        return (
                <Fragment>
                    <CommonsHeaderStyle>
                        <div className="header">
                            <p><ActiveNavLink tag={ "i" } to={ "/user" } className="fa fa-angle-left"/><span>我的消息</span></p>
                        </div>
                        <MessageContainer>
                            { this.messageItem() }
                        </MessageContainer>
                    </CommonsHeaderStyle>
                </Fragment>
        );
    }
    messageItem() {
        return this.state.message.map((item, index) => <Messageitem key={ index }>
                <div className="left">
                    <i className={ "fa "+item.type }/>
                </div>
                <div className="right">
                    <p>{ item.title }<span>条未读消息</span><span>{ item.number }</span></p>
                    <p><span>{ item.litterTitle }</span></p>
                </div>
            </Messageitem>
        )
    }

    componentWillReceiveProps() {
        this.setState({message: this.props})

    }
}

export default Message;
