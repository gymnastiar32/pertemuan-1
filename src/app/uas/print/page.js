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
                        <Title>Tiket</Title>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                    <Col span={24}>
                        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12, display: 'block' }}>Penumpang 1</Text>
                        <Card style={{ width: '100%' }}>
                            <Row gutter={[16, 16]} style={{ marginBottom: 12 }}>
                                <Col span={24} style={{ textAlign: 'left' }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Garuda Indonesia</Text>
                                </Col>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text type='secondary'>Nama</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Fulan bin Fulan</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text type='secondary'>Kelas</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Ekonomi</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text type='secondary'>Tujuan </Text>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Jakarta <SwapRightOutlined /> Yogyakarta</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text type='secondary'>Tanggal dan Jam </Text>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>10 Jan 2024, 16:30</Text>
                                    </Space>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12, display: 'block' }}>Penumpang 2</Text>
                        <Card style={{ width: '100%' }}>
                            <Row gutter={[16, 16]} style={{ marginBottom: 12 }}>
                                <Col span={24} style={{ textAlign: 'left' }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Garuda Indonesia</Text>
                                </Col>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text type='secondary'>Nama</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Fulan bin Fulan</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text type='secondary'>Kelas</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Ekonomi</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text type='secondary'>Tujuan </Text>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Jakarta <SwapRightOutlined /> Yogyakarta</Text>
                                    </Space>
                                </Col>
                                <Col span={8} style={{ textAlign: 'left' }}>
                                    <Space direction='vertical' size={0}>
                                        <Text type='secondary'>Tanggal dan Jam </Text>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>10 Jan 2024, 16:30</Text>
                                    </Space>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}