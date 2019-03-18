import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const SidebarBlock = ({ children, currentPath, to }) => {
  return (
    <NavLink
      style={{
        display: 'block',
        height: '80px'
      }}
      activeStyle={{
        backgroundColor: 'lightgrey'
      }}
      to={currentPath === to ? '/' : to}
    >
      {children}
    </NavLink>
  )
}

const Sidebar = ({ location }) => {
  const { pathname } = location
  return (
    <div
      style={{
        border: '1px solid gray',
        width: '80px'
      }}
    >
      <SidebarBlock currentPath={pathname} to="/edit">
        Edit
      </SidebarBlock>
      <SidebarBlock currentPath={pathname} to="/history">
        History
      </SidebarBlock>
      <SidebarBlock currentPath={pathname} to="/feedback">
        Feedback
      </SidebarBlock>
      <SidebarBlock currentPath={pathname} to="/people">
        People
      </SidebarBlock>
    </div>
  )
}

const ConnectedSidebar = withRouter(Sidebar)

export default ConnectedSidebar
