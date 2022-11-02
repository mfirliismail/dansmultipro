import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const dataUrl = `http://localhost:3000/job/list`
const ListJobs = ({list, loadMore, initLoading}) => {
  return (
    <div className='mx-2 my-4 bg-white px-4 py-3'>
      <div>
        <h1 className='text-2xl font-bold'>Job List</h1>
      </div>
      <List
      className="demo-loadmore-list border-b"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          // actions={[<a key="list-loadmore-edit"> </a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.company_logo} />}
              
              // title={<a href={`/detail/${item.id}`}>{item?.title}</a>}
              title={<Link to={`/detail/${item.id}`}>{item?.title}</Link>}
              description={`${item.company} - ${item.type}`}
            />
            {/* <div>content</div> */}
          </Skeleton>
          <div className='flex flex-columns mx-2'>
            <div><h2 className='mx-2'>{item.location}</h2></div>
            <div><p>1 day ago</p></div>
          </div>
          {/* <hr /> */}
        </List.Item>
      )}
    />
    </div>
  );
};
export default ListJobs;