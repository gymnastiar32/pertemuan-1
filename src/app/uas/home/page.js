'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserOutlined } from '@ant-design/icons';
import { Form, Input, Layout, Button, Space, Typography, Row, Col, DatePicker, InputNumber, Select } from 'antd';

const { Content } = Layout;
const { Title, Link } = Typography;

const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
};

const onChangeNumber = (value) => {
    console.log('changed', value);
};

const onChangeSelect = (value) => {
    console.log(`selected ${value}`);
};
const onSearchSelect = (value) => {
    console.log('search:', value);
};

const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Kota = [
    { "value": "jakarta", "label": "Jakarta (Soekarno-Hatta International Airport)" },
    { "value": "surabaya", "label": "Surabaya (Juanda International Airport)" },
    { "value": "medan", "label": "Medan (Kualanamu International Airport)" },
    { "value": "yogyakarta", "label": "Yogyakarta (Adisutjipto International Airport)" },
    { "value": "makassar", "label": "Makassar (Sultan Hasanuddin International Airport)" },
    { "value": "denpasar", "label": "Denpasar (Ngurah Rai International Airport)" },
    { "value": "palembang", "label": "Palembang (Sultan Mahmud Badaruddin II International Airport)" },
    { "value": "semarang", "label": "Semarang (Ahmad Yani International Airport)" },
    { "value": "tangerang", "label": "Tangerang (Soekarno-Hatta International Airport)" },
    { "value": "bekasi", "label": "Bekasi (Halim Perdanakusuma International Airport)" },
    { "value": "depok", "label": "Depok (Depati Amir Airport)" },
    { "value": "malang", "label": "Malang (Abdul Rachman Saleh Airport)" },
    { "value": "bogor", "label": "Bogor (Halim Perdanakusuma International Airport)" },
    { "value": "padang", "label": "Padang (Minangkabau International Airport)" },
    { "value": "manado", "label": "Manado (Sam Ratulangi International Airport)" },
    { "value": "pekanbaru", "label": "Pekanbaru (Sultan Syarif Kasim II International Airport)" },
    { "value": "balikpapan", "label": "Balikpapan (Sultan Aji Muhammad Sulaiman Airport)" },
    { "value": "batam", "label": "Batam (Hang Nadim International Airport)" },
    { "value": "jayapura", "label": "Jayapura (Sentani International Airport)" },
    { "value": "ambon", "label": "Ambon (Pattimura Airport)" },
    { "value": "banda aceh", "label": "Banda Aceh (Sultan Iskandar Muda International Airport)" },
    { "value": "samarinda", "label": "Samarinda (Samarinda International Airport)" },
    { "value": "pekalongan", "label": "Pekalongan (Pekalongan Airport)" },
    { "value": "tasikmalaya", "label": "Tasikmalaya (Cibeureum Airport)" },
    { "value": "banjarmasin", "label": "Banjarmasin (Syamsudin Noor International Airport)" },
    { "value": "mataram", "label": "Mataram (Lombok International Airport)" }
]


export default function Home() {

    return (
        <Layout>
            <Content style={{ padding: 20, backgroundColor: '#ffffff' }}>
                <Row>
                    <Col span={24} style={{ paddingInline: 12 }}>
                        <Title>Cari Penerbangan</Title>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: 16 }}>
                    <Col span={12}>
                        <Select
                            showSearch
                            placeholder="Kota Asal"
                            optionFilterProp="children"
                            onChange={onChangeSelect}
                            onSearch={onSearchSelect}
                            filterOption={filterOption}
                            options={Kota}
                            size='large'
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col span={12}>
                        <Select
                            showSearch
                            placeholder="Kota Tujuan"
                            optionFilterProp="children"
                            onChange={onChangeSelect}
                            onSearch={onSearchSelect}
                            filterOption={filterOption}
                            options={Kota}
                            size='large'
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: 16 }}>
                    <Col span={12}>
                        <DatePicker style={{ width: '100%' }} size='large' onChange={onChangeDate} placeholder="Tanggal Berangkat" />
                    </Col>
                    <Col span={12}>
                        <DatePicker style={{ width: '100%' }} size='large' onChange={onChangeDate} placeholder="Tanggal Pulang" />
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: 16 }}>
                    <Col span={12}>
                        <InputNumber style={{ width: '100%' }} size="large" min={1} max={10} onChange={onChangeNumber} placeholder="Jumlah Penumpang" />
                    </Col>
                    <Col span={12}>
                        <Button type="primary" size="large">Cari</Button>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )

}