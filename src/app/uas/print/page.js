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
            </Content>
        </Layout>
    )
}