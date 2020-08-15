import React from 'react';
import {
    BarChartOutlined,
    SettingOutlined,
    UserOutlined,
    LogoutOutlined
  } from '@ant-design/icons';
export default [
    {
        key: 1,
        name: "Dashboard",
        url: "/dashboard",
        view: ["ADMIN", "OTHER"],
        icon: <BarChartOutlined />,
    },
    {
        key: 2,
        name: "System",
        url: "#",
        view: ["ADMIN"],
        icon: <SettingOutlined />,
        children: [
          {
            key: 3,
            name: "Users",
            url: "/users",
            icon: <UserOutlined />
          },
        ]
    },
    {
        key: 4,
        name: "Logout",
        url: "#",
        view: ["ADMIN"],
        icon: <LogoutOutlined />,
    }
];