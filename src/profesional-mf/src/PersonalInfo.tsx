// src/components/PersonalInfo.tsx
import React from 'react';
import { Form, Input, Row, Col } from 'antd';

const PersonalInfo: React.FC = () => {
  return (
    <Row gutter={16}>
      <Col xs={24} sm={12}>
        <Form.Item
          name="firstName"
          label="Nome"
          rules={[{ required: true, message: 'Per favore inserisci il tuo nome!' }]}
        >
          <Input placeholder="Nome" />
        </Form.Item>
      </Col>
      <Col xs={24} sm={12}>
        <Form.Item
          name="lastName"
          label="Cognome"
          rules={[{ required: true, message: 'Per favore inserisci il tuo cognome!' }]}
        >
          <Input placeholder="Cognome" />
        </Form.Item>
      </Col>
      <Col xs={24} sm={12}>
        <Form.Item
          name="email"
          label="Email">
          <Input placeholder="Email" />
        </Form.Item>
      </Col>
      <Col xs={24} sm={12}>
        <Form.Item
          name="phone"
          label="Telefono">
          <Input placeholder="Telefono" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default PersonalInfo;