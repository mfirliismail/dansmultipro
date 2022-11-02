import Navbar from "../../components/Navbar";
import AppLayout from "../../layouts/AppLayouts";
// import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import DetailContent from "../../components/DetailContent";

export default function Detailjob() {
    const navigate = useNavigate()
    const [data, setData ] = useState("")
    const { id} = useParams()
    useEffect( () => {
        const url = `http://localhost:3000/job/detail/${id}`
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
        axios.get(url, config)
            .then((res) => {
            // console.log(res)
            setData(res.data.data);
            // setList(newData);
            // setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          });
    }, [])
    console.log('ini id', id)
  return (
    // <DemoBlock title='基础用法' padding='0'>
        <AppLayout>
            <Navbar></Navbar>
            <DetailContent item={data}></DetailContent>
        </AppLayout>
//   </div>
  );
}

// import {BrowserView, MobileView} from 'react-device-detect';
