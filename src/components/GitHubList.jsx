import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

import {Row, Col, Card, Typography, Avatar } from "antd";

const {Text} = Typography;

const GitHubList = (props) => {
    const {data, fetchMoreData} = props;

    return (
        <InfiniteScroll
            dataLength={data.list ? data.list.length : 0}
            next={fetchMoreData}
            hasMore={true}>
            <Row gutter={16} style={{margin: "25"}}>
                {data.list && data.list.map((item, index) => {
                    return data.category === "repositories" ? (
                        <Col key={index} lg={8} md={8} sm={12}>
                            <Card title={item.name} bordered={false}>
                                <Text>User: {item.owner.login}</Text>
                                <Text>Watchers: {item.watchers}</Text>
                                <Text>Forks: {item.forks}</Text>
                            </Card>
                        </Col>
                    ) : 
                    (
                        <Col key={index} lg={8} md={8} sm={12}>
                            <Card>
                                <Card.Meta
                                avatar={<Avatar src={item.avatar_url}/>}
                                title={item.login}
                                />
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </InfiniteScroll>
    );
}

export default GitHubList;