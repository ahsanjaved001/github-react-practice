import React from "react";
import {Layout, Row, Col, Image, Typography} from "antd";

import GitHubPng from "../../assets/github.png";

const {Header} = Layout;
const {Title, Text} = Typography;

const SharedHeader = () => {
    return (
            <Header style={{background: "white", marginTop: 25}}>
                <Row gutter={16} justify="center">
                    <Col>
                        <Image preview={false} width={60} src={GitHubPng}/>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Title level={3} style={{fontWeight: "bold"}}>GitHub Searcher</Title>
                            </Col>
                        </Row>
                        <Row style={{lineHeight: 0}}>
                            <Col>
                                <Text type="secondary">Search users or repositories below</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
    );
}

export default SharedHeader;