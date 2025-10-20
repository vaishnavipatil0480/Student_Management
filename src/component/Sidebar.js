import { Layout, Menu } from "antd";
import { useState } from "react";
// use nvaigation navigation change
import { useLocation, useNavigate } from "react-router-dom";
import {DashboardOutlined,UserOutlined ,BookOutlined ,SettingOutlined, LogoutOutlined, HomeFilled, HolderOutlined, BookFilled, ProductFilled, JavaOutlined, SlackOutlined,} from "@ant-design/icons"
import Profile from "./Profile";

const { Sider } = Layout;

export default function Sidebar() {
  //cpllapse ,set collapsed is a state it is loacal state manage,ent it used to sidebar collapse
const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get current route without leading slash
  const currentPath = location.pathname.replace('/', '') || 'dashboard';

  const menuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'students',
      icon: <UserOutlined />,
      label: 'Students',
    },
    {
      key: 'courses',
      icon: <BookOutlined />,
      label: 'Courses',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      key: 'demo',
      icon: <SettingOutlined/>,
      label: 'demo',
    },
    {
      key:"logout",
      icon:<LogoutOutlined/>,
      label:'logoutlined',
    },
    {
key:"domoOneScreen",
icon:<HomeFilled/>,
label:"Demo 1",
    },
    {
    key:"domoTwoScreen",
    icon:<HolderOutlined/>,
    label:"Demo 2",
    },
    {
    key:"domo3Screen",
    icon:<BookFilled/>,
    label:"Demo 3",
    },
    {
  key:"profilescreen",
   icon:<ProductFilled/>,
  label:"profile",
    },
      {
  key:"profile2screen",
   icon:<ProductFilled/>,
  label:"profile 2",
    },
     {
  key:"slider",
   icon:<SlackOutlined/>,
  label:"slider",
    }

  ];

  const handleMenuClick = ({ key }) => {
    navigate(`/${key}`);
  };

  return (
    <>
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      style={{
        background: '#fff',
        boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)'
      }}
    >
      <div className="sidebar-logo">
        <h3 style={{ margin: 0, color: '#1890ff', fontSize: collapsed ? '16px' : '18px' }}>
          {collapsed ? 'TLA' : 'Tech Learning Academy'}
        </h3>
      </div>
      <Menu
      //vartical text means inline
        mode="inline"
        selectedKeys={[currentPath]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{ borderRight: 0, marginTop: '16px' }}
      />
    </Sider>
    </>
  )
}
