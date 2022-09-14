import React from "react";
import lodash from "lodash";
import {Layout, Row, Col, Input, Select} from "antd";

import SharedHeader from "./common/header";

const {Content} = Layout;

const GitHubForm = (props) => {
    const {searchHandle, categoryHandle, data} = props;

    return (
        <Layout style={{background: "white"}}>
            <SharedHeader/>
            <Content>
                <Row gutter={16} justify="center" style={{marginTop: 25}}>
                    <Col>
                        <Input defaultValue={data.query} onChange={lodash.debounce(searchHandle, 1000)} size="large" placeholder="start typing to search .." style={{width: 300}}/>
                    </Col>
                    <Col>
                        <Select onChange={categoryHandle} size="large" defaultValue={data.category}>
                            <Select.Option value="users">users</Select.Option>
                            <Select.Option value="repositories">repositories</Select.Option>
                        </Select>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default GitHubForm;