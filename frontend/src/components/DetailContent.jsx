import { Avatar, Button, List, Skeleton } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
// import Item from 'antd/lib/list/Item';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const dataUrl = `http://localhost:3000/job/list`
const DetailContent = ({item}) => {
  return (
   <div>
     <div className='flex mx-4 my-4'>
        <Link to="/" className='flex flex-row'><ArrowLeftOutlined />
        <p className='font-bold text-primary-blue mx-2'> Back </p></Link>
     </div>
     <div className='mx-2 my-4 bg-white px-4 py-3'>
      <div>
        <p className='font-bold'>{item.type} / {item.location}</p>
        <h1 className='text-2xl font-bold'>{item.title}</h1>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{__html: `${item.description}`}} />
        {/* <div>{}</div> */}
    </div>
   </div>
  );
};
export default DetailContent;