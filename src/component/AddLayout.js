import { Avatar, Layout, Space } from 'antd';
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
// import Sidebar from './Sidebar';
import {UserOutlined} from '@ant-design/icons'
import Sidebar from './Sidebar';


const { Header, Content } = Layout;
export default function AddLayout() {
  //navigation routing change 
  const location = useLocation();
  
  // Get current page title from pathname
  //path name provide
  const getPageTitle = () => {
    const path = location.pathname.replace('/', '');
    if (!path || path === '') return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      
      <Layout>
        <Header style={{ 
          background: '#fff', 
          padding: '0 24px',
          boxShadow: '0 2px 8px 0 rgba(29, 35, 41, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h2 style={{ margin: 0, color: '#1890ff' }}>
            {/* page titile change */}
            {getPageTitle()}
          </h2>
          <Space>
            {/* icons call karanayasathi */}
            <Avatar icon={<UserOutlined/>} />
            <span style={{ fontWeight: 'bold' }}>Teacher Admin</span>
          </Space>
        </Header>
        
        <Content style={{ background: '#f5f5f5' }}>
          {/* This is where child routes will be rendered */}

          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
