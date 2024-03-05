import React from 'react';
import {Outlet} from 'react-router-dom';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import {Layout, Flex} from 'antd';
const {Sider, Content} = Layout;
import './style.scss';

const index = () => {
  return (
    <Flex gap='middle' wrap='wrap'>
      <Layout className='h-[100vh]'>
        <Sider width='15%' className='sidebar__'>
          <Sidebar />
        </Sider>
        <Layout className='main__'>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default index;
