/* eslint-disable @typescript-eslint/no-unused-vars */
import { DashboardOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';

const { Sider, Content, Footer } = Layout;
const SIDEBAR_WIDTH = 230;

const {
  token: { colorBgContainer },
} = theme.useToken();

const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('home');
  const items = [
    {
      key: 'home',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      onClick: () => {
        navigate('/');
      },
    },

    {
      key: 'create',
      icon: '',
      label: 'Create',
      onClick: () => {
        navigate('/create');
      },
    },
  ];

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        className="h-screen hidden md:block text-white font-semibold bg-gray-100"
        width={SIDEBAR_WIDTH}
      >
        <div className="h-16 p-2 flex justify-center space-x-2 items-center text-black text-2xl">
          {!collapsed && <div>OSSC</div>}
        </div>
        <div className="">
          {/* Side Menu */}
          <Menu
            className="bg-gray-100 flex-none"
            mode="inline"
            theme="light"
            defaultSelectedKeys={['1']}
            onSelect={(selectInfo) => {
              setSelectedKey(selectInfo.key);
            }}
            items={items}
          />
        </div>
      </Sider>
      <Content
        className="overflow-auto my-3 mx-2 p-6"
        style={{
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <Outlet />
      </Content>
      <Footer
        style={{ textAlign: 'center', height: '6px' }}
        className="p-0 items-center"
      >
        Ocss ©2024 Created by Ocss
      </Footer>
    </Layout>
  );
};

export default Dashboard;
