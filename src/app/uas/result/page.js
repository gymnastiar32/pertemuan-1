'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserOutlined, SwapRightOutlined } from '@ant-design/icons';
import { Form, Input, Layout, Button, Space, Typography, Card, Row, Col, DatePicker, InputNumber, Select, Badge } from 'antd';

const { Content } = Layout;
const { Title, Link, Text } = Typography;

export default function Home() {
    return (
        <Layout>
            <Content style={{ padding: 20, backgroundColor: '#ffffff' }}>
                <Row>
                    <Col span={24} style={{ paddingInline: 12 }}>
                        <Title>Pilih Tiket</Title>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                    <Col span={12}>
                        <Card style={{ width: '100%' }}>
                            <Row gutter={4} style={{ marginBottom: 12 }}>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Garuda Indonesia</Text>
                                        <Text type='secondary'>Ekonomi</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'center' }}>
                                    <Title level={4} style={{ margin: 0 }}>6:20 <SwapRightOutlined /> 17:40</Title>
                                </Col>
                                <Col span={8} style={{ textAlign: 'right' }}>
                                    <Text type='danger' style={{ fontSize: 18, fontWeight: '600' }}><small>Rp</small> 900,000</Text>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} style={{ textAlign: 'right' }}>
                                    <Button type="primary" size="medium">Pilih</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card style={{ width: '100%' }}>
                            <Row gutter={4} style={{ marginBottom: 12 }}>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Garuda Indonesia</Text>
                                        <Text type='secondary'>Ekonomi</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'center' }}>
                                    <Title level={4} style={{ margin: 0 }}>6:20 <SwapRightOutlined /> 17:40</Title>
                                </Col>
                                <Col span={8} style={{ textAlign: 'right' }}>
                                    <Text type='danger' style={{ fontSize: 18, fontWeight: '600' }}><small>Rp</small> 900,000</Text>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} style={{ textAlign: 'right' }}>
                                    <Button type="primary" size="medium">Pilih</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card style={{ width: '100%' }}>
                            <Row gutter={4} style={{ marginBottom: 12 }}>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Garuda Indonesia</Text>
                                        <Text type='secondary'>Ekonomi</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'center' }}>
                                    <Title level={4} style={{ margin: 0 }}>6:20 <SwapRightOutlined /> 17:40</Title>
                                </Col>
                                <Col span={8} style={{ textAlign: 'right' }}>
                                    <Text type='danger' style={{ fontSize: 18, fontWeight: '600' }}><small>Rp</small> 900,000</Text>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} style={{ textAlign: 'right' }}>
                                    <Button type="primary" size="medium">Pilih</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card style={{ width: '100%' }}>
                            <Row gutter={4} style={{ marginBottom: 12 }}>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Garuda Indonesia</Text>
                                        <Text type='secondary'>Ekonomi</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'center' }}>
                                    <Title level={4} style={{ margin: 0 }}>6:20 <SwapRightOutlined /> 17:40</Title>
                                </Col>
                                <Col span={8} style={{ textAlign: 'right' }}>
                                    <Text type='danger' style={{ fontSize: 18, fontWeight: '600' }}><small>Rp</small> 900,000</Text>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} style={{ textAlign: 'right' }}>
                                    <Button type="primary" size="medium">Pilih</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card style={{ width: '100%' }}>
                            <Row gutter={4} style={{ marginBottom: 12 }}>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Garuda Indonesia</Text>
                                        <Text type='secondary'>Ekonomi</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'center' }}>
                                    <Title level={4} style={{ margin: 0 }}>6:20 <SwapRightOutlined /> 17:40</Title>
                                </Col>
                                <Col span={8} style={{ textAlign: 'right' }}>
                                    <Text type='danger' style={{ fontSize: 18, fontWeight: '600' }}><small>Rp</small> 900,000</Text>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} style={{ textAlign: 'right' }}>
                                    <Button type="primary" size="medium">Pilih</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card style={{ width: '100%' }}>
                            <Row gutter={4} style={{ marginBottom: 12 }}>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Garuda Indonesia</Text>
                                        <Text type='secondary'>Ekonomi</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'center' }}>
                                    <Title level={4} style={{ margin: 0 }}>6:20 <SwapRightOutlined /> 17:40</Title>
                                </Col>
                                <Col span={8} style={{ textAlign: 'right' }}>
                                    <Text type='danger' style={{ fontSize: 18, fontWeight: '600' }}><small>Rp</small> 900,000</Text>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} style={{ textAlign: 'right' }}>
                                    <Button type="primary" size="medium">Pilih</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}