import React from 'react';
import { Menu } from 'antd';
import menuItems from './menus';
import { useHistory } from 'react-router-dom';
import './SideBarMenu.scss';
const { SubMenu } = Menu;
function SideBarMenu() {
    const history = useHistory();
    const onMenuClick = ({url, name}) => {
        if(name === 'Logout') {
          history.push('/');
        }
        history.push(url);
    }
    const getSubMenu = (menuItem) => {
        return (
          <SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.name} className={'SubMenu'}>
            {
              menuItem.children.map((child) => (
                <Menu.Item key={menuItem.key} icon={child.icon} onClick={() => onMenuClick(child)}>
                  <span>{child.name}</span>
                </Menu.Item>
              ))
            }
          </SubMenu>
        );
      }
      const renderMenu = () => {
        let menus = [];
        menuItems.forEach((menuItem) => {
          if(menuItem.children){
            menus.push(getSubMenu(menuItem));
          } else{
            menus.push(
              <Menu.Item key={menuItem.key} icon={menuItem.icon} onClick={() => onMenuClick(menuItem)} >
                <span>{menuItem.name}</span>
              </Menu.Item>
            )
          }
        });
        return menus;
      }
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className={'MenuItems'}>
        {renderMenu()}
        </Menu>
    )
}

export default SideBarMenu
