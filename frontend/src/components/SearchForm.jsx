import { Layout, Button, Input, Form, Row, Col  } from "antd";
import { SearchOutlined } from '@ant-design/icons';
// const { Option } = Select
import { Tabs, Badge, SearchBar } from 'antd-mobile'
import React, { useState } from "react";
// import { DemoBlock } from 'demos'

const { Content, Footer } = Layout;

export default function SearchForm({ onSearch, setData }) {
    const [form] = Form.useForm();
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    console.log(description, location)

    const handleSearch = () => {
        // const { description, location } = form.getFieldValue()
        // console.log(form.getFieldValue())
        onSearch(description,location)
    }    // console.log(onClickMenu)
  return (
    <div className="mx-3 my-3">
        <Form>

       <Row>
      <Col span={8} className="mx-2">
        <p className="font-bold">Job Description</p>
        <Form.Item
        // label="Description"
        name="description"
        >
            <Input onChange={(e) => setDescription(e.target.value)} name="description"></Input>
        </Form.Item>

      </Col>
      <Col span={8} className="mx-2">
        <p className="font-bold">Location</p>
      <Form.Item
        // label="Location"
        name="location"
        >
            <Input onChange={(e) => setLocation(e.target.value)}  name="location"></Input>
        </Form.Item >
      </Col>
      <Col span={7}>
        <p></p>
        <Form.Item className="mx-2 flex justify-center"
        >
            <Button onClick={handleSearch}>Search</Button>
        </Form.Item>
      </Col>
    </Row>
        </Form>
        
    </div>
  );
}

// import {BrowserView, MobileView} from 'react-device-detect';
