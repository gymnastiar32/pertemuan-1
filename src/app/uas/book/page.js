'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { } from '@ant-design/icons';
import { Form, Input, Layout, Button, Space, Typography, Card, Row, Col, DatePicker, InputNumber, Radio, Select, Badge } from 'antd';

const { Content } = Layout;
const { Title, Link, Text } = Typography;

export default function Home() {
    return (
        <Layout>
            <Content style={{ padding: 20, backgroundColor: '#ffffff' }}>
                <Row>
                    <Col span={24} style={{ paddingInline: 12 }}>
                        <Title>Form Pemesanan</Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ marginBottom: 16 }}>
                        <Card style={{ width: '100%' }}>
                            <Title level={4} style={{ marginTop: 0, marginBottom: 20 }}>Detail Kontak</Title>
                            <Row gutter={[16, 16]} style={{ marginBottom: 12 }}>
                                <Col span={12}>
                                    <Input size="large" placeholder="Nama" style={{ width: '100%' }} />
                                </Col>
                                <Col span={12}>
                                    <Input type='tel' size="large" placeholder="Nomor Telepon" style={{ width: '100%' }} />
                                </Col>
                                <Col span={12}>
                                    <Input type='email' size="large" placeholder="Email" style={{ width: '100%' }} />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24} style={{ marginBottom: 16 }}>
                        <Card style={{ width: '100%' }}>
                            <Title level={4} style={{ marginTop: 0, marginBottom: 20 }}>Data Penumpang 1</Title>
                            <Row gutter={[16, 16]} style={{ marginBottom: 12 }}>
                                <Col span={24}>
                                    <Radio.Group>
                                        <Radio value='male'>Male</Radio>
                                        <Radio value='female'>Female</Radio>
                                    </Radio.Group>
                                </Col>
                                <Col span={12}>
                                    <Input size="large" placeholder="Nama" style={{ width: '100%' }} />
                                </Col>
                                <Col span={12}>
                                    <DatePicker style={{ width: '100%' }} size='large' placeholder="Tanggal Lahir" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24} style={{ marginBottom: 16 }}>

                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}