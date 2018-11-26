import React from 'react'
import { NavLink, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const OwnLinkItem = (props) => {
    let Tag = props.tag || 'a'
    let _class = props.className || ''
    let _activeClassName = props.activeClassName || 'active'
    let isActive = props.exact ? props.location.pathname === props.to : props.location.pathname.startsWith(props.to)
    let className = (props.nav && isActive) ? _class + ' ' + _activeClassName : _class
    return <Tag className = { className } onClick={() => { props.history.push(props.to) }}>{props.children}</Tag>
}

export const OwnLink = props => {
    let Item = withRouter(OwnLinkItem)
    return (
            <Item {...props}/>
    )
}

export const OwnNavLink = props => {
    let Item = withRouter(OwnLinkItem)
    return (
            <Item {...props} nav/>
    )
}
// 为react-router提供的NavLink加样式
export const ActiveNavLink = styled(OwnNavLink)`
    &.active {
        color: #34b9be;
    }
`

