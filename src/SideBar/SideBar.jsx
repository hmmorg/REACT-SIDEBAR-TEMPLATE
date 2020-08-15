import React from 'react'
import { Layout } from 'antd';
import SideBarMenu from './SideBarMenu/SideBarMenu';
import './SideBar.scss';
const { Sider } = Layout;
const SideBar = ( { collapsed }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} className={'SideBar'}>
        <div className="logo__section" >
          <h3>{process.env.REACT_APP_WEBSITE_NAME}</h3>
        </div>
        <SideBarMenu />
      </Sider>
    )
}

export default SideBar
