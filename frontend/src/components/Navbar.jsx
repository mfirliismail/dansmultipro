import { Layout, Button } from "antd";
// const { Option } = Select
import { Tabs, Badge, SearchBar } from 'antd-mobile'
import React, { useState } from "react";
// import { DemoBlock } from 'demos'

const { Content, Footer } = Layout;

export default function Navbar({ onClickMenu }) {
    // console.log(onClickMenu)
    const handleClick = (e) => {
        console.log(e)
        onClickMenu(e);
      };
  return (
        <div className="z-30 px-3 py-2 bg-primary-blue">
        <div className="flex flex-row content-center">
          <h1 className="text-white text-2xl self-center mx-2">GitHub </h1>
          <h4 className="text-white self-center">Jobs</h4>
        </div>
  </div>
  );
}

// import {BrowserView, MobileView} from 'react-device-detect';
