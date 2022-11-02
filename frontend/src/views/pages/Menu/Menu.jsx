import { Layout, Button } from "antd";
// import { Tabs, Badge, SearchBar } from 'antd-mobile'
// import React, { useState } from "react";
// import { useEffect } from "react";
import ListJobs from "../../../components/Menus/ListJobs";
// import ListMenu from "../../../components/Menus/ListMenu";
import Navbar from "../../../components/Navbar";
import SearchForm from "../../../components/SearchForm";
import AppLayout from "../../../layouts/AppLayouts";
// import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
let dataUrl = `http://localhost:3000/job/list`

const { Content, Footer } = Layout;

export default function Menu() {
  const navigate = useNavigate()
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  console.log(data)
  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log('ini token', token)
    if(!token){
      navigate('/login')
    }
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    axios.get(dataUrl, config)
      .then((res) => {
        // console.log(res)
        setInitLoading(false);
        setData(res.data.data);
        setList(res.data.data);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    );
    const token = localStorage.getItem("token")
    console.log('ini token', token)
    if(!token){
      navigate('/login')
    }
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    axios.get(dataUrl, config)
      .then((res) => {
        console.log(res)
        const newData = data.concat(res.data.data);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  const onSearch = (description, location) => {
    const token = localStorage.getItem("token")
    console.log('ini token', token)
    if(!token){
      navigate('/login')
    }
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      params: {
        description,
        location
      }
    }
    // if(descriptions)
    axios.get(dataUrl, config)
    .then((res) => {
      console.log('ini search',res)
      // const newData = data.concat(res.data.data);
      setData(res.data.data);
      setList(res.data.data);
      setLoading(false);
      // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
      // In real scene, you can using public method of react-virtualized:
      // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
      // window.dispatchEvent(new Event('resize'));
    });
  }
  return (
    // <DemoBlock title='基础用法' padding='0'>
        <AppLayout>
            <Navbar></Navbar>
            <SearchForm onSearch={onSearch} setData={setData}></SearchForm>
            <ListJobs list={data} loadMore={loadMore} initLoading={initLoading}></ListJobs>
        </AppLayout>
//   </div>
  );
}

// import {BrowserView, MobileView} from 'react-device-detect';
