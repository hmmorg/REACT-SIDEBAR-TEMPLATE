import React, {useState} from 'react'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import SideBar from '../SideBar/SideBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './Routes/Routes';
import './AppContainer.scss';
import Login from '../Login/Login';
const { Header, Content } = Layout;
const AppContainer = ( { children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const onMenuClick = () => {
      setCollapsed(!collapsed);
    }
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route path={`/`} exact>
            <Login />
        </Route>
        <Layout>
          <SideBar collapsed={collapsed}/>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: onMenuClick,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
              >
              <Routes />
            </Content>
          </Layout>
        </Layout>
        </Switch>
      </Router>
    )
}
export default AppContainer;
